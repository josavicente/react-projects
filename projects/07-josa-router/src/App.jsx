import { useEffect, useState } from 'react'
import './App.css'
import { EVENTS } from './consts.js'

function navigate(href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navEvent = new Event(EVENTS.PUSH_STATE)
  window.dispatchEvent(navEvent)
}
function HomePage() {
  return (
    <>
      <h1>Homepage</h1>
      <p></p>
      <button onClick={() => navigate('/about')}>About</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1550172985058811905/f8Lt3CAd_400x400.jpg"
          alt="Foto Josa"
        />
        <p>Hola!</p>
      </div>
      <button onClick={() => navigate('/')}>Ir a la Home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.pushState, onLocationChange)
    window.addEventListener(EVENTS.popState, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.pushState, onLocationChange)
    }
  }, [])
  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}
export default App
