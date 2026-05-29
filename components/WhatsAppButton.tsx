import { MessageCircle } from "lucide-react";
import { getSettings } from "@/lib/cms";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const settings = getSettings();
  const url = buildWhatsAppUrl(settings.whatsapp, "Hello, I would like to request a quotation for custom industrial springs.");

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-industrial transition hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
