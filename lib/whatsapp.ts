export function parseWhatsAppNumbers(value: string) {
  return value
    .split(/[,，;\n]+/)
    .map((item) => item.replace(/[^\d]/g, ""))
    .filter(Boolean);
}

export function getRotatingWhatsAppNumber(value: string) {
  const numbers = parseWhatsAppNumbers(value);
  if (numbers.length === 0) return "";

  const rotationKey = Math.floor(Date.now() / (1000 * 60 * 60));
  return numbers[rotationKey % numbers.length];
}

export function buildWhatsAppUrl(value: string, message: string) {
  const phone = getRotatingWhatsAppNumber(value);
  const text = encodeURIComponent(message);
  return phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`;
}
