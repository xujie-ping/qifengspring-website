import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getSettings } from "@/lib/cms";

export const runtime = "nodejs";
export const maxDuration = 30;

const allowedExtensions = new Set([".pdf", ".dwg"]);
const maxFileSize = 12 * 1024 * 1024;

function valueOf(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function sanitizeFileName(name: string) {
  return name.replace(/[^\w.\-() ]+/g, "_");
}

function getExtension(name: string) {
  const dot = name.lastIndexOf(".");
  return dot >= 0 ? name.slice(dot).toLowerCase() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = valueOf(formData, "name");
    const email = valueOf(formData, "email");
    const country = valueOf(formData, "country");
    const whatsapp = valueOf(formData, "whatsapp");
    const category = valueOf(formData, "category");
    const quantity = valueOf(formData, "quantity");
    const message = valueOf(formData, "message");
    const files = formData.getAll("drawings").filter((file): file is File => file instanceof File && file.size > 0);

    if (!name || !email || !country || !category || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    for (const file of files) {
      const extension = getExtension(file.name);
      if (!allowedExtensions.has(extension)) {
        return NextResponse.json({ error: "Only PDF and DWG drawing files are supported." }, { status: 400 });
      }
      if (file.size > maxFileSize) {
        return NextResponse.json({ error: "Each drawing file must be smaller than 12MB." }, { status: 400 });
      }
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      return NextResponse.json({ error: "SMTP email service is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user, pass }
    });

    const attachments = await Promise.all(
      files.map(async (file) => ({
        filename: sanitizeFileName(file.name),
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || "application/octet-stream"
      }))
    );

    const submittedAt = new Date().toISOString();
    const html = `
      <h2>New RFQ Inquiry</h2>
      <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#d0d7de;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
        <tr><td><strong>Country</strong></td><td>${escapeHtml(country)}</td></tr>
        <tr><td><strong>WhatsApp</strong></td><td>${escapeHtml(whatsapp || "Not provided")}</td></tr>
        <tr><td><strong>Product Category</strong></td><td>${escapeHtml(category)}</td></tr>
        <tr><td><strong>Estimated Quantity</strong></td><td>${escapeHtml(quantity || "Not provided")}</td></tr>
        <tr><td><strong>Submitted At</strong></td><td>${submittedAt}</td></tr>
      </table>
      <h3>Requirement</h3>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `;

    const settings = getSettings();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: process.env.RFQ_TO || settings.email || "fatmaachab862@gmail.com",
      replyTo: email,
      subject: `New Spring RFQ from ${name} - ${country}`,
      html,
      attachments
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("RFQ submission failed:", error);
    return NextResponse.json({ error: "RFQ submission failed. Please try again or contact us by email." }, { status: 500 });
  }
}
