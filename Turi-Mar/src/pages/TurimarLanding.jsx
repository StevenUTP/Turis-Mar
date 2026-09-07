
import { useState } from "react";
import { Compass, Store, Star } from "lucide-react";

const PROFILES = [
  {
    id: "turista",
    label: "Turista",
    sub: "Explorar y descubrir",
    icon: Compass,
  },
  {
    id: "negocio",
    label: "Dueño de Negocio",
    sub: "Gestionar mi local",
    icon: Store,
  },
];

const COPY = {
  turista: {
    title: "Bienvenido a Turi-Mar",
    subtitle: "Inicia sesión para explorar la costa",
  },
  negocio: {
    title: "Bienvenido, emprendedor",
    subtitle: "Inicia sesión para gestionar tu local",
  },
};

export default function TurimarLanding({ onLogin }) {
  const [profile, setProfile] = useState("turista");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    onLogin?.();
    // TODO: reemplazar por la llamada real a la API de autenticación
  };

  return ( 
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[1.15fr_1fr] bg-sky-50">
      <section
        className="relative flex flex-col justify-between px-8 py-8 md:px-14 md:py-10 text-white overflow-hidden min-h-[320px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,30,45,0.55) 0%, rgba(10,30,45,0.25) 40%, rgba(10,20,35,0.8) 100%), linear-gradient(135deg, #1c3b52 0%, #2c5f7c 45%, #3f7fa0 100%)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-sky-500 text-white text-xs font-extrabold tracking-tight">
            TM
          </span>
          <span className="text-lg font-bold">
            Turi-<span className="font-extrabold">Mar</span>
          </span>
        </div>

        <div className="max-w-md">
          <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-sky-100">
            Turismo &amp; gastronomía local
          </p>
          <h1 className="mt-4 mb-4 text-4xl md:text-5xl font-extrabold leading-[1.12] tracking-tight">
            Descubre los sabores{" "}
            <span className="text-sky-200">ocultos del mar</span>
          </h1>
          <p className="max-w-sm text-sky-100 leading-relaxed">
            Rutas gastronómicas, huariques auténticos y puntos históricos
            costeros — todo en un solo mapa.
          </p>

          <dl className="flex gap-8 mt-10">
            <div>
              <dt className="text-2xl font-extrabold">142+</dt>
              <dd className="mt-0.5 text-[0.65rem] font-bold tracking-wide uppercase text-sky-200">
                Negocios
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-extrabold">38</dt>
              <dd className="mt-0.5 text-[0.65rem] font-bold tracking-wide uppercase text-sky-200">
                Rutas para explorar
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-extrabold flex items-center gap-1">
                4.9 <Star size={16} className="fill-current" />
              </dt>
              <dd className="mt-0.5 text-[0.65rem] font-bold tracking-wide uppercase text-sky-200">
                Valoración
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Panel derecho: auth */}
      <section className="flex items-center justify-center px-5 py-10 md:px-10 bg-sky-50">
        <div className="w-full max-w-sm">
          <fieldset className="mb-6 border-0 p-0">
            <legend className="mb-3 text-[0.7rem] font-bold tracking-[0.1em] uppercase text-sky-700">
              Selecciona tu perfil
            </legend>
            <div className="flex gap-3">
              {PROFILES.map(({ id, label, sub, icon: Icon }) => {
                const active = profile === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setProfile(id)}
                    className={`flex-1 flex items-center gap-2.5 px-3.5 py-3 rounded-xl border-[1.5px] text-left transition-colors ${
                      active
                        ? "bg-sky-50 border-sky-500"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={active ? "text-sky-600" : "text-slate-400"}
                    />
                    <span className="flex flex-col leading-tight">
                      <strong
                        className={`text-sm ${
                          active ? "text-sky-700" : "text-slate-800"
                        }`}
                      >
                        {label}
                      </strong>
                      <small className="text-xs text-slate-500">{sub}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="p-7 bg-white rounded-2xl shadow-[0_20px_50px_rgba(20,60,90,0.08)]">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {COPY[profile].title}
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              {COPY[profile].subtitle}
            </p>

            <form className="mt-6 grid" onSubmit={handleSubmit}>
              <label
                htmlFor="login-email"
                className="mb-1.5 text-[0.7rem] font-bold tracking-wide uppercase text-sky-700"
              >
                Correo electrónico
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="tu@correo.com"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3.5 py-3 rounded-lg border border-slate-200 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 text-slate-900"
              />

              <label
                htmlFor="login-password"
                className="mt-3 mb-1.5 text-[0.7rem] font-bold tracking-wide uppercase text-sky-700"
              >
                Contraseña
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3.5 py-3 rounded-lg border border-slate-200 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 text-slate-900"
              />

              <a
                href="#"
                className="self-end mt-2 text-sm font-semibold text-sky-600 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>

              <button
                type="submit"
                className="mt-5 py-3.5 rounded-[10px] bg-red-500 hover:bg-red-600 text-white font-bold transition-colors"
              >
                Iniciar Sesión
              </button>

              <div className="flex items-center gap-3 my-5 text-xs text-slate-400">
                <span className="flex-1 h-px bg-slate-200" />
                o continúa con
                <span className="flex-1 h-px bg-slate-200" />
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 rounded-[10px] border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.84 2.09-1.79 2.73v2.27h2.9c1.7-1.56 2.69-3.87 2.69-6.64z" />
                  <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.27c-.8.54-1.83.86-3.06.86-2.36 0-4.35-1.59-5.06-3.73H.9v2.34C2.38 15.98 5.48 18 9 18z" />
                  <path fill="#FBBC05" d="M3.94 10.68A5.4 5.4 0 013.64 9c0-.58.1-1.15.3-1.68V4.98H.9A9 9 0 000 9c0 1.45.35 2.83.9 4.02l3.04-2.34z" />
                  <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.46 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0 5.48 0 2.38 2.02.9 4.98l3.04 2.34C4.65 5.17 6.64 3.58 9 3.58z" />
                </svg>
                Continuar con Google
              </button>

              <p className="mt-4 text-center text-sm text-slate-500">
                ¿No tienes cuenta?{" "}
                <a href="#" className="font-bold text-sky-600 hover:underline">
                  Regístrate gratis
                </a>
              </p>

              {submitted && (
                <p className="mt-3 text-center text-xs text-emerald-600">
                  Demo: inicio de sesión simulado para {email || "tu correo"}.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
