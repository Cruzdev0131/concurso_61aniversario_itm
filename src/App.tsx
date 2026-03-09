import { AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { Route, Routes, useLocation } from 'react-router-dom'
import logoTecnmHorizontal from './assets/LogoTecNMHorizontal_Blanco.png'
import { SiteHeader } from './components/SiteHeader'
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
          <Route path="/" element={<HomePage />} />
          <Route path="/concurso" element={<ConcursoPage />} />
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
            <p>Instituto Tecnologico de Morelia - 61 aniversario</p>
            <p>Capitulo de Algoritmia y Programacion Competitiva ITM</p>
          </section>

          <section className="footer-block">
            <h4>Contacto</h4>
            <p className="footer-line">
              <FaEnvelope aria-hidden="true" />
              <span>Correo: Aurelio.cr@morelia.tecnm.mx</span>
            </p>
            <p className="footer-line">
              <FaPhoneAlt aria-hidden="true" />
              <span>Telefono (responsable academico): +52 1 443 160 4078</span>
            </p>
            <p className="footer-line">
              <FaMapMarkerAlt aria-hidden="true" />
              <span>
                Direccion: Av. Tecnologico 1500, Colonia Lomas de Santiaguito, C.P. 58120,
                Morelia, Michoacan.
              </span>
            </p>
            <p className="footer-line">
              <FaGlobe aria-hidden="true" />
              <span>
                Sitio web:{' '}
                <a href="https://itmorelia.edu.mx" target="_blank" rel="noreferrer">
                  itmorelia.edu.mx
                </a>
              </span>
            </p>
            <p>Atencion: Lunes a Viernes, 09:00 - 17:00</p>
          </section>

          <section className="footer-block">
            <h4>Enlaces</h4>
            <a href="/concurso">Convocatoria y registro</a>
            <a href="/recursos">Recursos y FAQ</a>
            <a href="https://whatsapp.com/channel/0029Vb7Iuq1BA1f4srngcy2N" target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" /> Canal de WhatsApp
            </a>
            <a href="https://algoritmiaitm.vercel.app" target="_blank" rel="noreferrer">
              Unete o conoce mas de nosotros
            </a>
          </section>
        </div>

        <div className="footer-bottom">
          <p>Concurso de Programacion Competitiva ITM 2026</p>
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App
