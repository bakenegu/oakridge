const SEGMENT =
  "   ★  Schedule a private tour today to see why families trust Oakridge Manor Living in Plano, TX   ★  Nurse-led, 24/7 hands-on residential care   ★  Call us: (512) 555-0100   ★  Limited rooms available — reserve yours today";

export default function TickerBanner() {
  const items = Array.from({ length: 4 }, (_, i) => (
    <span key={i} className="ticker-segment">
      {SEGMENT}
    </span>
  ));

  return (
    <div
      className="overflow-hidden py-2.5"
      style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
      aria-hidden="true"
    >
      <div className="ticker-track">
        {items}
        {items}
      </div>
    </div>
  );
}
