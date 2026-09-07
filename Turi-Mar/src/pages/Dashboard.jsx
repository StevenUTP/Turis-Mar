import { useState } from 'react';
import { FILTERS, PINS } from '../data/mockData';
import Stars from '../components/Start';
import MapBackground from '../components/MapBackground';

export default function Dashboard({ onPinClick, onLogout }) {
  const [activeFilters, setActiveFilters] = useState(["Acepta Yape/Plin", "Comida Típica"]);
  const [search, setSearch] = useState("");

  const toggleFilter = (f) =>
    setActiveFilters(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);

  return (
    <div className="flex flex-col w-full h-screen bg-slate-100 font-body">
      {/* Top nav */}
      <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-200 z-20 flex-shrink-0 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-sm bg-sea">TM</div>
          <span className="font-black text-xl text-slate-800 font-display">
            Turi<span className="text-sea">-Mar</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-sky-600">
            <span>🗺️</span> Mis rutas
          </button>
          <button onClick={onLogout} className="text-xs text-slate-400 hover:text-red-500 transition-colors">Salir</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-[320px] flex-shrink-0 flex flex-col bg-white border-r border-slate-200 overflow-y-auto z-10 shadow-lg">
          <div className="p-5">
            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Busca huarique, playa, ruta…"
                className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 text-sm outline-none focus:border-sky-400 bg-slate-50"
              />
            </div>

            {/* Filters */}
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Filtros de nicho</p>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map(f => {
                  const active = activeFilters.includes(f);
                  return (
                    <button
                      key={f}
                      onClick={() => toggleFilter(f)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all duration-150 ${
                        active ? "border-kelp bg-kelp-light text-kelp-dark" : "border-slate-300 bg-white text-slate-500"
                      }`}
                    >
                      {active && "✓ "}{f}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nearby results */}
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Cerca de ti · {PINS.length} resultados</p>
            <div className="flex flex-col gap-2">
              {PINS.map(pin => (
                <button key={pin.id} onClick={() => onPinClick(pin.id)} className="flex items-center gap-3 p-3 rounded-2xl border border-slate-200 bg-white hover:bg-sky-50 transition-all text-left">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">{pin.name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Stars count={Math.round(pin.rating)} />
                      <span className="text-xs text-slate-500">{pin.rating}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Map Area */}
        <div className="flex-1 relative">
          <MapBackground onPinClick={onPinClick} />
        </div>
      </div>
    </div>
  );
}