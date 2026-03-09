import { motion } from 'framer-motion'
import { AnimatedPage } from '../components/AnimatedPage'

const schedule = [
  { label: '08:00', detail: 'Registro y check-in de equipos' },
  { label: '09:00', detail: 'Bienvenida y briefing tecnico' },
  { label: '09:30', detail: 'Inicio de competencia' },
  { label: '14:30', detail: 'Cierre de envios' },
  { label: '15:00', detail: 'Resultados y premiacion' },
]

const faq = [
  {
    question: 'Que lenguajes se permiten?',
    answer: 'Generalmente C++, Java y Python, sujeto a la convocatoria final.',
  },
  {
    question: 'Habra internet durante la competencia?',
    answer: 'No, salvo acceso a recursos definidos por el comite organizador.',
  },
  {
    question: 'Se puede registrar mas de un equipo por escuela?',
    answer: 'Si, siempre que cada participante este en un solo equipo.',
  },
]

export function RecursosPage() {
  return (
    <AnimatedPage className="page">
      <section className="hero hero-alt">
        <p className="eyebrow">Recursos del Evento</p>
        <h1>Todo para competir con buena preparacion</h1>
        <p className="subtitle">
          Consulta guia rapida, horarios de referencia, preguntas frecuentes y
          materiales recomendados de entrenamiento.
        </p>
      </section>

      <section className="card">
        <h2>Horario de referencia</h2>
        <div className="timeline">
          {schedule.map((item) => (
            <motion.div
              className="timeline-item"
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <strong>{item.label}</strong>
              <p>{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>FAQ</h2>
        <div className="faq-grid">
          {faq.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Entrenamiento sugerido</h2>
        <ul>
          <li>Practica diaria de 2 a 4 problemas de dificultad progresiva.</li>
          <li>Simulacros de 3 a 5 horas en equipo para preparar estrategia.</li>
          <li>Repaso de grafos, programacion dinamica y estructuras avanzadas.</li>
        </ul>
      </section>
    </AnimatedPage>
  )
}