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
            <a href="/">Convocatoria y registro</a>
            <a href="/recursos">Recursos y FAQ</a>
<<<<<<< HEAD
            <a href="https://whatsapp.com/channel/0029Vb7Iuq1BA1f4srngcy2N" target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" /> Canal de WhatsApp
            </a>
            <a href="https://algoritmiaitm.vercel.app" target="_blank" rel="noreferrer">
              Unete o conoce mas de nosotros
            </a>
=======
            <a href="/sabias-que">Sabias que?</a>
            <a href="#">Aviso de privacidad</a>
>>>>>>> a317d6ad2d88220de7ccf75a6ea462d00e648ae1
          </section>
        </div>

        <div className="footer-bottom">
<<<<<<< HEAD
          <p>Concurso de Programacion Competitiva ITM 2026</p>
          <p>Desarrollado por CruzDev</p>
=======
          <p>Concurso de Programacion Competitiva ITM 2026 - aniversario del CAP ITM</p>
>>>>>>> a317d6ad2d88220de7ccf75a6ea462d00e648ae1
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export default App

