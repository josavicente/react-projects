import { useEffect, useState } from 'react'
import './App.css'

const NAVIGATION_EVENT = 'pushState'

function navigate(href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navEvent = new Event(NAVIGATION_EVENT)
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
    window.addEventListener(NAVIGATION_EVENT, onLocationChange)
    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
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
