import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteHeader } from './components/SiteHeader'
import logoTecnmHorizontal from './assets/LogoTecNMHorizontal_Blanco.png'
import { ConcursoPage } from './pages/ConcursoPage'
import { HomePage } from './pages/HomePage'
import { RecursosPage } from './pages/RecursosPage'
import './App.css'

function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <SiteHeader />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<ConcursoPage />} />
          <Route path="/concurso" element={<ConcursoPage />} />
          <Route path="/sabias-que" element={<HomePage />} />
          <Route path="/recursos" element={<RecursosPage />} />
        </Routes>
      </AnimatePresence>

      <footer className="site-footer">
        <div className="footer-inner">
          <section className="footer-block">
            <img
              src={logoTecnmHorizontal}
              alt="Logo horizontal TecNM"
              className="footer-tecnm-logo"
            />
            <p>Instituto Tecnologico de Morelia - 61 aniversario del Tec</p>
            <p>Primer aniversario del Capitulo de Algoritmia y Programacion Competitiva ITM</p>
          </section>

          <section className="footer-block">
            <h4>Contacto</h4>
            <p>Correo: capitulo.algoritmia.itm@ejemplo.com</p>
            <p>Ubicacion: Morelia, Michoacan, Mexico</p>
            <p>Atencion: Lunes a Viernes, 09:00 - 17:00</p>
          </section>

          <section className="footer-block">
            <h4>Enlaces</h4>
            <a href="/">Convocatoria y registro</a>
            <a href="/sabias-que">Sabias que?</a>
            <a href="/recursos">Recursos y FAQ</a>
            <a href="#">Aviso de privacidad</a>
          </section>
        </div>

        <div className="footer-bottom">
          <p>Concurso de Programacion Competitiva ITM 2026 - aniversario del CAP ITM</p>
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App
