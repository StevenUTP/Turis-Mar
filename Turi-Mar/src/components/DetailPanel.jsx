import { useState } from "react";
import { BUSINESS } from "../data/mockData";
import Stars from "./Start";
import MapBackground from "./MapBackground";

export default function DetailPanel({ onClose, onBack }) {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <div className="flex flex-col w-full h-screen font-body absolute inset-0 z-50 bg-slate-100">
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Cabecera (Nav) */}
        <header className="flex items-center justify-between px-6 py-3 bg-white border-b border-slate-200 z-20 flex-shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-black text-sm bg-sea">TM</div>
            <span className="font-black text-xl text-slate-800 font-display">
              Turi<span className="text-sea">-Mar</span>
            </span>
          </div>
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">
            ← Volver al mapa
          </button>
        </header>

        <div className="flex flex-1 overflow-hidden relative">
          {/* Fondo del mapa borroso (Estética visual) */}
          <div className="flex-1 relative flex-shrink-0">
            <div className="absolute inset-0 blur-sm opacity-60">
              <MapBackground onPinClick={() => {}} />
            </div>
            <div className="absolute inset-0 bg-sky-900/30" />
            
            {/* Mensaje flotante */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur rounded-2xl px-6 py-4 text-center shadow-xl">
                <p className="text-slate-500 text-sm font-semibold">Visualizando detalle del negocio</p>
              </div>
            </div>
          </div>

          {/* Panel Lateral de Detalle (Se desliza desde la derecha) */}
          <div
            className="w-[480px] flex-shrink-0 bg-white flex flex-col overflow-y-auto shadow-[-8px_0_40px_rgba(0,0,0,0.15)] rounded-l-3xl"
          >
            {/* Carrusel de Fotos */}
            <div className="relative h-56 flex-shrink-0 bg-sky-100">
              <img
                src={BUSINESS.photos[activePhoto]}
                alt={`Foto de ${BUSINESS.name}`}
                className="w-full h-full object-cover rounded-tl-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-tl-3xl" />
              
              {/* Controles del carrusel */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {BUSINESS.photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhoto(i)}
                    className="transition-all duration-150 rounded-full"
                    style={{
                      width: activePhoto === i ? 24 : 8,
                      height: 8,
                      background: activePhoto === i ? "white" : "rgba(255,255,255,0.5)",
                    }}
                  />
                ))}
              </div>

              {activePhoto > 0 && (
                <button onClick={() => setActivePhoto(p => p - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-lg">‹</button>
              )}
              {activePhoto < BUSINESS.photos.length - 1 && (
                <button onClick={() => setActivePhoto(p => p + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-lg">›</button>
              )}

              {/* Botón Cerrar */}
              <button onClick={onClose} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-sm font-bold">✕</button>
            </div>

            {/* Miniaturas de Fotos */}
            <div className="flex gap-2 px-5 pt-3 flex-shrink-0">
              {BUSINESS.photos.map((ph, i) => (
                <button
                  key={i}
                  onClick={() => setActivePhoto(i)}
                  className={`flex-1 h-16 rounded-xl overflow-hidden border-2 transition-all ${activePhoto === i ? 'border-sea' : 'border-transparent'}`}
                >
                  <img src={ph} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Contenido de la Ficha */}
            <div className="flex-1 px-5 pt-4 pb-6">
              
              {/* Título y Calificación */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h2 className="font-black text-2xl text-slate-900 leading-tight font-display">
                    {BUSINESS.name}
                  </h2>
                  <p className="text-slate-500 text-sm mt-0.5">{BUSINESS.subtitle}</p>
                </div>
                <div className="flex flex-col items-end flex-shrink-0">
                  <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1.5 rounded-xl border border-amber-200">
                    <Stars count={5} />
                    <span className="font-black text-sm text-amber-700 font-display">4.9</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-1">127 reseñas</span>
                </div>
              </div>

              {/* Etiquetas (Tags) */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {BUSINESS.tags.map(t => (
                  <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-kelp-light text-kelp-dark">
                    {t}
                  </span>
                ))}
              </div>

              {/* Información General */}
              <div className="bg-slate-50 rounded-2xl p-4 mb-5 space-y-2.5">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-lg">🕐</span>
                  <div>
                    <span className="font-semibold text-slate-700">Horario: </span>
                    <span className="text-slate-600">{BUSINESS.hours}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-lg">📍</span>
                  <span className="text-slate-600">{BUSINESS.address}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-lg">💳</span>
                  <span className="text-slate-600">Efectivo · Yape · Plin · Tarjeta</span>
                </div>
              </div>

              {/* Botón WhatsApp */}
              <button className="w-full py-4 rounded-2xl text-white font-black text-base flex items-center justify-center gap-3 mb-3 transition-all hover:brightness-105 active:scale-95 bg-kelp shadow-[0_8px_24px_rgba(22,163,74,0.35)] font-display">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.099 1.51 5.825L.057 23.272a.75.75 0 00.921.921l5.448-1.453A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.872 0-3.627-.497-5.143-1.367l-.369-.215-3.831 1.022 1.023-3.831-.215-.369A9.72 9.72 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                Contactar por WhatsApp
              </button>

              {/* Botón Reclamar Negocio */}
              <button className="w-full py-3 rounded-2xl border-2 border-slate-300 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors mb-6">
                <span>🔑</span>
                Reclamar este negocio <span className="text-xs text-slate-400">(Solo dueños)</span>
              </button>

              {/* Sección de Reseñas */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-black text-lg text-slate-800 font-display">Reseñas</h3>
                  <button className="text-xs font-semibold text-sea hover:text-sea-dark">Ver todas →</button>
                </div>
                
                <div className="space-y-4">
                  {BUSINESS.reviews.map((rev, i) => (
                    <div key={i} className="bg-slate-50 rounded-2xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 bg-sea">
                          {rev.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-slate-800 truncate font-display">{rev.author}</p>
                          <div className="flex items-center gap-2">
                            <Stars count={rev.stars} />
                            <span className="text-xs text-slate-400">{rev.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{rev.text}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 py-3 rounded-2xl border-2 border-dashed border-sky-300 text-sea font-semibold text-sm hover:bg-sky-50 transition-colors">
                  + Escribir reseña
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}