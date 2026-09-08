import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import TurimarLanding from './pages/TurimarLanding'

function App() {
  const [screen, setScreen] = useState<'landing' | 'dashboard'>('landing')

  if (screen === 'dashboard') {
    return <Dashboard onPinClick={() => undefined} onLogout={() => setScreen('landing')} />
  }

  return <TurimarLanding onLogin={() => setScreen('dashboard')} />
}

export default App
//esto un comentario 