import './App.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <Navigation />

      <AppRoutes />

      <Footer />

      <Analytics />
    </>
  )
}

export default App
