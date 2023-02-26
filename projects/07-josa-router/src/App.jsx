import './App.css'

import { AboutPage } from './pages/About.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { Router } from './pages/Router.jsx'
import { Page404 } from './pages/404.jsx'
import SearchPage from './pages/Search'
import { Route } from './Route.jsx'

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
    Component: SearchPage,
  },
]

function App() {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
      </Router>
    </main>
  )
}
export default App
