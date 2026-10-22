import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import './styles/components.css'

function App() {
  const isContactPage = window.location.pathname.replace(/\/+$/, '') === '/contact'

  return isContactPage ? <Contact /> : <Home />
}

export default App
