import { useEffect, useState } from 'react'
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

const EVENT_DATE = new Date('2026-03-25T15:00:00-06:00')

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, ended: false }
}

export function ConcursoPage() {
  const [openModal, setOpenModal] = useState<'registro' | 'banco' | 'omegaup' | null>(null)
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
        <p className="limit-hype">
          Cupo limitado: maximo 10 equipos. No te quedes afuera.
        </p>
      </section>

      <section className="card">
        <h2>Cuenta regresiva al concurso</h2>
        <p className="subtitle">
          Inicio programado para el miercoles 25 de marzo de 2026 a las 3:00 p.m.
          (hora del centro de Mexico).
        </p>
        {timeLeft.ended ? (
          <p><strong>El concurso ya esta en curso o finalizo.</strong></p>
        ) : (
          <div className="countdown-grid" aria-label="Cuenta regresiva">
            <article className="countdown-unit">
              <p className="countdown-value">{timeLeft.days}</p>
              <p className="countdown-label">Dias</p>
            </article>
            <article className="countdown-unit">
              <p className="countdown-value">{timeLeft.hours}</p>
              <p className="countdown-label">Horas</p>
            </article>
            <article className="countdown-unit">
              <p className="countdown-value">{timeLeft.minutes}</p>
              <p className="countdown-label">Minutos</p>
            </article>
            <article className="countdown-unit">
              <p className="countdown-value">{timeLeft.seconds}</p>
              <p className="countdown-label">Segundos</p>
            </article>
          </div>
        )}
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
            <p>Inicio 3:00 p.m. - Fin 6:30 p.m.</p>
          </article>
          <article>
            <h3>Lugar</h3>
            <p>Sala O, edificio O, Campus 1 (Instituto Tecnologico de Morelia)</p>
          </article>
          <article>
            <h3>Modalidad</h3>
            <p>Presencial</p>
          </article>
          <article>
            <h3>Plataforma</h3>
            <p>La competencia se llevara a cabo en omegaUp.</p>
          </article>
          <article>
            <h3>Cuota de recuperacion</h3>
            <p>$100.00 MXN por equipo</p>
          </article>
          <article>
            <h3>Cupo maximo</h3>
            <p>10 equipos en total (cupo limitado)</p>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Agenda del 25 de marzo de 2026</h2>
        <ul>
          <li>Acomodo y apertura: 2:30 p.m.</li>
          <li>Hora de inicio: 3:00 p.m.</li>
          <li>Hora de fin: 6:30 p.m.</li>
          <li>Clausura y premiacion: 7:00 p.m.</li>
        </ul>
      </section>

      <section className="card limited-card">
        <h2>Cupo limitado</h2>
        <p>
          Solo se aceptaran <strong>10 equipos</strong>. El registro se cerrara al completar
          cupo, aun si la fecha limite no ha llegado.
        </p>
        <p><strong>No te quedes afuera: registra tu equipo cuanto antes.</strong></p>
      </section>

      <section className="card">
        <h2>Fechas clave de registro y pago</h2>
        <ul>
          <li>Limite de inscripcion y pago: miercoles 18 de marzo de 2026, 23:59 h.</li>
          <li>El formulario solicita comprobante de pago, por eso ambos limites son el mismo dia.</li>
          <li>Confirmacion de equipos validados: jueves 19 de marzo de 2026.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Formato de competencia</h2>
        <ul>
          <li>Duracion de competencia: 3 horas 30 minutos.</li>
          <li>Banco estimado: 8 a 12 problemas algoritmicos.</li>
          <li>Sistema de puntuacion y penalizacion: formato ACM/ICPC.</li>
          <li>Lenguajes permitidos: C++, Java y Python.</li>
          <li>Envios y veredicto: a traves de la plataforma omegaUp.</li>
        </ul>
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
            Descargar convocatoria (incluye reglamento y aviso de privacidad)
          </a>
        </div>
      </section>

      <section className="card" id="registro">
        <h2>Registro y pago</h2>
        <p>
          Para completar tu registro se requiere formulario, integrantes y comprobante.
          La cuota de recuperacion es de $100.00 MXN por equipo. Revisa los requisitos
          antes de enviar.
        </p>
        <p className="deadline-note">
          <strong>Limite de inscripcion y pago:</strong> 18 de marzo de 2026.
          <span> Cupo limitado a 10 equipos.</span>
        </p>
        <div className="inline-actions">
          <a
            className="button primary"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYfM3o6L0GsDMvMlVbnGX55w6o3WF_IO3rBrVRJ3A5zfKC1A/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
          >
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
          <li>Primer lugar: constancia, reconocimiento y premio especial.</li>
          <li>Segundo lugar: constancia y reconocimiento.</li>
          <li>Tercer lugar: constancia y reconocimiento.</li>
          <li>Los demas lugares: constancia de participacion.</li>
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
          <li>Cuota de recuperacion: $100.00 MXN por equipo.</li>
          <li>Comprobante de pago legible.</li>
        </ul>
      </Modal>

      <Modal
        isOpen={openModal === 'banco'}
        onClose={() => setOpenModal(null)}
        title="Datos bancarios"
      >
        <p>Banco: Banamex</p>
        <p>CLABE: 0024 7044 7400 7263 08</p>
        <p>Titular: Aurelio Amaury Coria Ramirez</p>
        <p>Monto: $100.00 MXN</p>
        <p>Concepto: Inscripcion + nombre del equipo</p>
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
