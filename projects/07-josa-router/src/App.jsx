import './App.css'

import { AboutPage } from './pages/About.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { Router } from './pages/Router.jsx'
const routes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
]

function App() {
  return (
    <main>
      <Router routes={routes} />
    </main>
  )
}
export default App
