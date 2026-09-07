import { PINS, ROUTE_POINTS } from '../data/mockData';

export default function MapBackground({ onPinClick }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: "#A8D5E8" }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Aquí va toda la ruta de polígonos estáticos de Figma */}
        <rect width="100" height="100" fill="#A8D5E8" />
        <path d="M0,20 Q10,15 20,25 Q30,35 25,50 Q20,65 10,70 Q5,80 0,85 Z" fill="#D4E9C7" />
        <path d="M18,0 Q28,5 35,15 Q42,25 38,35 Q34,45 28,42 Q22,38 18,28 Q12,15 18,0 Z" fill="#C8E2B6" />
        {/* Gastronomy route */}
        <polyline
          points={ROUTE_POINTS.map(([x, y]) => `${x},${y}`).join(" ")}
          stroke="#DC2626"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>

      <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
        Ruta Gastronómica Marina
      </div>

      {/* Renderizado dinámico de los Pines */}
      {PINS.map(pin => (
        <button
          key={pin.id}
          onClick={() => onPinClick(pin.id)}
          className="absolute map-pin group flex flex-col items-center transition-transform hover:scale-110"
          style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -100%)" }}
        >
          <div className="flex items-center gap-1.5 bg-red-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity mb-1 whitespace-nowrap">
            {pin.name}
          </div>
          <svg viewBox="0 0 24 32" className="w-7 h-9" fill="none">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 8.5 12 20 12 20S24 20.5 24 12C24 5.37 18.63 0 12 0z" fill="#DC2626" />
            <circle cx="12" cy="12" r="5" fill="white" />
            <circle cx="12" cy="12" r="3" fill="#DC2626" />
          </svg>
        </button>
      ))}
    </div>
  );
}