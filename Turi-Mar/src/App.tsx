import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import PersonalizaExperiencia from './pages/PersonalizaExperiencia'
import TurimarLanding from './pages/TurimarLanding'

function App() {
  const [screen, setScreen] = useState<'landing' | 'personalize' | 'dashboard'>('landing')

  if (screen === 'personalize') {
    return (
      <PersonalizaExperiencia
        onContinue={() => setScreen('dashboard')}
        onSkip={() => setScreen('dashboard')}
      />
    )
  }

  if (screen === 'dashboard') {
    return <Dashboard onPinClick={() => undefined} onLogout={() => setScreen('landing')} />
  }

  return <TurimarLanding onLogin={() => setScreen('personalize')} />
}

export default App
//esto un comentario 