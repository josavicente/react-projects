import './App.css'
import { lazy, Suspense } from 'react'
// import { AboutPage } from './pages/About.jsx'
// import { HomePage } from './pages/HomePage.jsx'
import { Router } from './Router.jsx'
import { Page404 } from './pages/404.jsx'
import SearchPage from './pages/Search'
import { Route } from './Route.jsx'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/HomePage.jsx'))

const routes = [
  // {
  //   path: '/',
  //   Component: HomePage,
  // },
  {
    path: '/:lang/about',
    Component: LazyAboutPage,
  },
  {
    path: '/search/:query',
    Component: SearchPage,
  },
]

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}
export default App
