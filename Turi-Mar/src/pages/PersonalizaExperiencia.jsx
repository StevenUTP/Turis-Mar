import { useState } from "react";

const FOOD_TAGS = [
  "Ceviche",
  "Mariscos",
  "Chicharrones",
  "Postres Locales",
  "Comida Criolla",
  "Pescado Frito",
];

const COMPANIONS = [
  { id: "familiar", label: "Familiar", emoji: "👨‍👩‍👧" },
  { id: "amigos", label: "Con Amigos", emoji: "🧑‍🤝‍🧑" },
  { id: "romantico", label: "Romántico", emoji: "❤️" },
  { id: "solo", label: "Explorador Solo", emoji: "🎒" },
];

export default function PersonalizaExperiencia({ onContinue, onSkip }) {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [companion, setCompanion] = useState(null);

  const toggleFood = (tag) => {
    setSelectedFoods((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleContinue = () => {
    const preferences = { foods: selectedFoods, companion };
    // TODO: reemplazar por la llamada real para guardar preferencias del usuario
    onContinue?.(preferences);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-sky-50 px-5 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-[0_20px_50px_rgba(20,60,90,0.08)] px-6 py-8 md:px-10 md:py-10">
        <h1 className="text-2xl md:text-[1.7rem] font-extrabold text-slate-900 text-center">
          Personaliza tu experiencia
        </h1>
        <p className="mt-2 text-sm text-slate-500 text-center max-w-md mx-auto leading-relaxed">
          Cuéntanos qué te gusta para recomendarte los mejores rincones,
          huariques y rutas de Chimbote.
        </p>

        <div className="mt-8">
          <p className="mb-3 text-[0.7rem] font-bold tracking-wide uppercase text-sky-700">
            ¿Qué se te antoja probar?
          </p>
          <div className="flex flex-wrap gap-2.5">
            {FOOD_TAGS.map((tag) => {
              const active = selectedFoods.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleFood(tag)}
                  className={`px-4 py-2 rounded-full border-[1.5px] text-sm font-semibold transition-colors ${
                    active
                      ? "bg-sky-500 border-sky-500 text-white"
                      : "bg-white border-slate-200 text-sky-700 hover:border-sky-300"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-3 text-[0.7rem] font-bold tracking-wide uppercase text-sky-700">
            ¿Con quién viajas?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {COMPANIONS.map(({ id, label, emoji }) => {
              const active = companion === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setCompanion(id)}
                  className={`flex flex-col items-center gap-2 px-3 py-4 rounded-xl border-[1.5px] transition-colors ${
                    active
                      ? "bg-sky-50 border-sky-500"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`grid place-items-center w-11 h-11 rounded-full text-xl ${
                      active ? "bg-sky-100" : "bg-slate-50"
                    }`}
                  >
                    {emoji}
                  </span>
                  <span
                    className={`text-xs font-bold text-center leading-tight ${
                      active ? "text-sky-700" : "text-slate-700"
                    }`}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-9 pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSkip?.()}
            className="text-sm font-semibold text-slate-400 hover:text-slate-600"
          >
            Saltar este paso
          </button>
          <button
            type="button"
            onClick={handleContinue}
            className="px-6 py-3 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold text-sm transition-colors"
          >
            Continuar →
          </button>
        </div>
      </div>
    </div>
  );
}
