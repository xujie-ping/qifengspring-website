const markets = [
  { name: "United States", x: "24%", y: "39%" },
  { name: "Mexico", x: "20%", y: "52%" },
  { name: "Germany", x: "51%", y: "35%" },
  { name: "France", x: "48%", y: "39%" },
  { name: "Poland", x: "54%", y: "34%" },
  { name: "Turkey", x: "57%", y: "45%" },
  { name: "Brazil", x: "34%", y: "70%" },
  { name: "India", x: "68%", y: "53%" }
];

export function GlobalMap() {
  return (
    <div className="relative overflow-hidden border border-blue-100 bg-[radial-gradient(circle_at_50%_45%,rgba(11,99,206,0.16),#ffffff_44%,#eef6ff_100%)] p-6 shadow-industrial">
      <div className="absolute inset-0 metal-grid opacity-60" />
      <svg viewBox="0 0 1000 500" className="relative h-auto w-full text-blue-200" role="img" aria-label="Global export market map">
        <path
          d="M174 140l90-28 82 24 38 52-45 42-95 16-75-38-32-40 37-28zm272-26l65-24 70 17 29 47-20 55-83 12-69-32-18-45 26-30zm235 74l104-15 96 33 41 64-44 52-117 3-77-39-33-58 30-40zM280 294l80-22 70 37 20 79-64 54-79-18-43-62 16-68zm342-5l95-18 93 34 20 74-60 52-92-10-68-54 12-78z"
          fill="currentColor"
          opacity="0.95"
        />
        <path d="M120 250h760M500 70v360" stroke="#7aaeea" strokeOpacity="0.35" strokeWidth="1" />
      </svg>
      {markets.map((market) => (
        <div
          key={market.name}
          className="absolute"
          style={{
            left: market.x,
            top: market.y
          }}
        >
          <span className="relative flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-35" />
            <span className="relative inline-flex h-5 w-5 rounded-full border-2 border-white bg-signal shadow-[0_0_0_4px_rgba(11,99,206,0.14)]" />
          </span>
          <span className="mt-2 hidden whitespace-nowrap border border-blue-100 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm md:block">
            {market.name}
          </span>
        </div>
      ))}
    </div>
  );
}
