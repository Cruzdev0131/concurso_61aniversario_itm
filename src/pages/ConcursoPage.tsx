import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedPage } from '../components/AnimatedPage'
import { Modal } from '../components/Modal'

const confettiPieces = [
  { id: 1, top: 14, left: 8, size: 8, color: '#f0c85b', delay: 0 },
  { id: 2, top: 24, left: 20, size: 6, color: '#ffd97a', delay: 0.4 },
  { id: 3, top: 12, left: 42, size: 7, color: '#ffe9b4', delay: 0.9 },
  { id: 4, top: 20, left: 66, size: 9, color: '#f5c047', delay: 0.2 },
  { id: 5, top: 10, left: 84, size: 7, color: '#ffe9b4', delay: 0.6 },
  { id: 6, top: 30, left: 94, size: 6, color: '#ffd97a', delay: 1.1 },
]

export function ConcursoPage() {
  const [openModal, setOpenModal] = useState<'registro' | 'banco' | 'omegaup' | null>(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <AnimatedPage className="page">
      <section className="hero hero-anniversary">
        <div className="confetti-layer" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <motion.span
              key={piece.id}
              className="confetti-piece"
              style={{
                top: `${piece.top}%`,
                left: `${piece.left}%`,
                width: piece.size,
                height: piece.size,
                background: piece.color,
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.4, scale: 1 }
                  : {
                      opacity: [0.25, 0.7, 0.25],
                      y: [0, -7, 4, 0],
                      rotate: [0, 28, -22, 0],
                      scale: [1, 1.2, 0.95, 1],
                    }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0.2 }
                  : {
                      duration: 4 + piece.id * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: piece.delay,
                      ease: 'easeInOut',
                    }
              }
            />
          ))}
        </div>

        <div className="anniversary-row">
          <motion.div
            className="anniversary-badge"
            initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <motion.span
              className="anniversary-glow"
              aria-hidden="true"
              animate={prefersReducedMotion ? { opacity: 0.25 } : { opacity: [0.15, 0.5, 0.15] }}
              transition={{
                duration: 2.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
              }}
            />
            <span className="anniversary-number">1</span>
            <span className="anniversary-label">er</span>
          </motion.div>

          <motion.p
            className="anniversary-kicker"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            Aniversario del Capitulo APC ITM
          </motion.p>
        </div>

        <p className="eyebrow">Actividad oficial del 61 aniversario del Tec</p>
        <h1>Concurso de Programacion Competitiva</h1>
        <p className="subtitle">
          Concurso conmemorativo por el primer aniversario del Capitulo de Algoritmia y
          Programacion Competitiva ITM, realizado como actividad del 61 aniversario del Tec.
          Encuentra aqui toda la informacion operativa del evento.
        </p>
      </section>

      <section className="card">
        <h2>Datos del evento</h2>
        <div className="grid">
          <article>
            <h3>Fecha</h3>
            <p>Miercoles 25 de marzo de 2026</p>
          </article>
          <article>
            <h3>Horario</h3>
            <p>Por confirmar</p>
          </article>
          <article>
            <h3>Lugar</h3>
            <p>Instituto Tecnologico de Morelia, Michoacan</p>
          </article>
          <article>
            <h3>Modalidad</h3>
            <p>Presencial, equipos de hasta 3 integrantes</p>
          </article>
          <article>
            <h3>Plataforma</h3>
            <p>La competencia se llevara a cabo en omegaUp.</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Plataforma oficial de competencia</h2>
        <p>
          El concurso se realizara en <strong>omegaUp</strong>. Te recomendamos crear o
          verificar tu cuenta antes del evento.
        </p>
        <div className="inline-actions">
          <a className="button primary" href="https://omegaup.com/" target="_blank" rel="noreferrer">
            Ir a omegaUp
          </a>
          <button className="button soft" type="button" onClick={() => setOpenModal('omegaup')}>
            Que es omegaUp
          </button>
        </div>
      </section>

      <section className="card" id="documentos">
        <h2>Convocatoria y reglamento</h2>
        <div className="links">
          <a href="#" target="_blank" rel="noreferrer">
            Descargar convocatoria (PDF)
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Reglamento completo
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            Aviso de privacidad
          </a>
        </div>
      </section>

      <section className="card" id="registro">
        <h2>Registro y pago</h2>
        <p>
          Para completar tu registro se requiere formulario, integrantes y comprobante.
          Revisa los requisitos antes de enviar.
        </p>
        <div className="inline-actions">
          <a className="button primary" href="#" target="_blank" rel="noreferrer">
            Abrir formulario
          </a>
          <button className="button soft" type="button" onClick={() => setOpenModal('registro')}>
            Ver requisitos
          </button>
          <button className="button soft" type="button" onClick={() => setOpenModal('banco')}>
            Ver info bancaria
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Premiacion y reglas base</h2>
        <ul>
          <li>1.er lugar: reconocimiento y premio especial.</li>
          <li>2.do lugar: reconocimiento y premio.</li>
          <li>3.er lugar: reconocimiento.</li>
          <li>Penalizacion por tiempo segun formato ACM/ICPC.</li>
        </ul>
      </section>

      <Modal
        isOpen={openModal === 'registro'}
        onClose={() => setOpenModal(null)}
        title="Checklist de registro"
      >
        <ul>
          <li>Nombre de equipo y escuela de procedencia.</li>
          <li>Datos de 1 a 3 participantes.</li>
          <li>Correo y telefono de contacto del capitan.</li>
          <li>Comprobante de pago legible.</li>
        </ul>
      </Modal>

      <Modal
        isOpen={openModal === 'banco'}
        onClose={() => setOpenModal(null)}
        title="Datos bancarios"
      >
        <p>Banco: Por confirmar</p>
        <p>Cuenta/CLABE: Por confirmar</p>
        <p>Titular: Por confirmar</p>
        <p>Concepto: Concurso 1.er aniversario CAP ITM (actividad 61 aniversario Tec) + nombre del equipo</p>
      </Modal>

      <Modal
        isOpen={openModal === 'omegaup'}
        onClose={() => setOpenModal(null)}
        title="Que es omegaUp"
      >
        <p>
          omegaUp es una plataforma de programacion competitiva donde resuelves problemas,
          envias tu codigo y recibes veredicto automatico.
        </p>
        <ul>
          <li>Permite competir en tiempo real con ranking.</li>
          <li>Evalua soluciones con casos de prueba.</li>
          <li>Es una plataforma ampliamente usada en Mexico y LATAM.</li>
        </ul>
      </Modal>
    </AnimatedPage>
  )
}
