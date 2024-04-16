import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Loading from './components/Loading'
import { GridProvider } from './components/Grid'

const Home = React.lazy(() => import('./pages/Home'))
const Payments = React.lazy(() => import('./pages/Payments'))

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Grid</Link>
            </li>
            <li>
              <Link to="/payments">Payments</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<Loading />}>
          <GridProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/payments" element={<Payments />} />
            </Routes>
          </GridProvider>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
