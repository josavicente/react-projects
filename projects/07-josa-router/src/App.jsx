import './App.css'

import { AboutPage } from './pages/About.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { Router } from './pages/Router.jsx'
import { Page404 } from './pages/404.jsx'

const routes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/search/:query',
    Component: () => <h1>Search</h1>,
  },
]

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404} />
    </main>
  )
}
export default App
