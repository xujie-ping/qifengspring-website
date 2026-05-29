"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { UploadCloud } from "lucide-react";

const countries = [
  "United States",
  "Canada",
  "Mexico",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "United Kingdom",
  "Poland",
  "Turkey",
  "Brazil",
  "Argentina",
  "United Arab Emirates",
  "Saudi Arabia",
  "India",
  "Indonesia",
  "Thailand",
  "Vietnam",
  "Japan",
  "South Korea",
  "Australia",
  "Other"
];

const categories = [
  "Automotive Starter Springs",
  "Alternator Regulator Springs",
  "One-Way Clutch Flat Springs",
  "Automotive Shock Absorber Springs",
  "Steering Gear Springs",
  "Home Appliance Springs",
  "Power Tool Springs",
  "Custom Spring Project"
];

export function RfqForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        body: formData
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "RFQ submission failed.");
      }

      setStatus("success");
      setMessage("Your RFQ has been sent successfully. Our team will reply soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "RFQ submission failed.");
    }
  }

  return (
    <form className="technical-surface grid gap-5 border border-white/10 p-6 shadow-industrial md:p-8" onSubmit={handleSubmit}>
      <div>
        <h2 className="text-2xl font-semibold text-white">RFQ Form</h2>
        <p className="mt-2 text-sm leading-6 text-steel-300">
          Upload PDF or DWG drawings and our engineering team will review your requirement.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
          Name *
          <input className="min-h-12 border border-white/10 bg-navy-900 px-4 text-base text-white outline-none focus:border-signal" name="name" required />
        </label>
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
          Email *
          <input className="min-h-12 border border-white/10 bg-navy-900 px-4 text-base text-white outline-none focus:border-signal" name="email" type="email" required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
          Country *
          <select className="min-h-12 border border-white/10 bg-navy-900 px-4 text-base text-white outline-none focus:border-signal" name="country" required defaultValue="">
            <option value="" disabled>
              Select country
            </option>
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
          WhatsApp
          <input className="min-h-12 border border-white/10 bg-navy-900 px-4 text-base text-white outline-none focus:border-signal" name="whatsapp" placeholder="+1 000 000 0000" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
          Product Category *
          <select className="min-h-12 border border-white/10 bg-navy-900 px-4 text-base text-white outline-none focus:border-signal" name="category" required>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
          Estimated Quantity
          <input className="min-h-12 border border-white/10 bg-navy-900 px-4 text-base text-white outline-none focus:border-signal" name="quantity" placeholder="e.g. 10,000 pcs / month" />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
        Upload Drawing
        <span className="flex min-h-28 cursor-pointer items-center justify-center border border-dashed border-white/20 bg-black/30 px-4 text-center text-sm normal-case tracking-normal text-steel-300 transition hover:border-signal">
          <span>
            <UploadCloud className="mx-auto mb-2 h-7 w-7 text-signal" />
            PDF or DWG files, max 12MB each
          </span>
          <input className="sr-only" name="drawings" type="file" accept=".pdf,.dwg,application/pdf" multiple />
        </span>
      </label>

      <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
        Requirement *
        <textarea
          className="min-h-40 border border-white/10 bg-navy-900 px-4 py-3 text-base text-white outline-none focus:border-signal"
          name="message"
          required
          placeholder="Material, wire diameter, load, dimensions, surface treatment, packaging and target application."
        />
      </label>

      <button className="bg-signal px-6 py-4 font-bold text-navy-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending RFQ..." : "Submit RFQ"}
      </button>

      {message ? (
        <p className={status === "success" ? "border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-200" : "border border-red-500/30 bg-red-500/10 p-4 text-red-200"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
