import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AnimatedPage } from '../components/AnimatedPage'
import { Modal } from '../components/Modal'
import codingCupImg from '../assets/codingcup.jpg'
import icpcArenaImg from '../assets/icpcgpmexico2025arena.jpeg'
import teamItmImg from '../assets/teamitmmireliaicpc}.jpeg'

const impactData = [
  {
    metric: 'Pensamiento estructurado',
    description: 'Mejora el analisis de problemas complejos con restricciones reales de tiempo.',
  },
  {
    metric: 'Mejor empleabilidad',
    description: 'Desarrolla habilidades tecnicas y de trabajo en equipo muy valoradas en industria.',
  },
  {
    metric: 'Proyeccion internacional',
    description: 'Conecta con rutas como ICPC, coding cups universitarias y campamentos de alto rendimiento.',
  },
]

const gallery = [
  {
    title: 'Ruta ICPC',
    description: 'Entrenamientos locales que escalan a regionales y finales mundiales.',
    image: icpcArenaImg,
  },
  {
    title: 'Coding Cups en Mexico',
    description: 'Torneos intensivos para fogueo competitivo y resolucion bajo presion.',
    image: codingCupImg,
  },
  {
    title: 'Comunidades y plataformas',
    description: 'Practica constante en comunidades universitarias y plataformas de jueceo.',
    image: teamItmImg,
  },
]

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <AnimatedPage className="page">
      <section className="hero hero-home">
        <p className="eyebrow">Sabias que?</p>
        <h1>La programacion competitiva puede acelerar tu perfil profesional</h1>
        <p className="subtitle">
          En el ecosistema mexicano, la programacion competitiva impulsa talento en
          algoritmos, colaboracion tecnica y velocidad de implementacion.
        </p>

        <div className="hero-actions">
          <Link className="button primary" to="/">
            Ir al concurso
          </Link>
          <button className="button ghost" type="button" onClick={() => setIsModalOpen(true)}>
            Datos de impacto
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Por que importa en formacion universitaria</h2>
        <div className="grid">
          {impactData.map((item) => (
            <motion.article
              key={item.metric}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{item.metric}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Circuito y referencias visuales</h2>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <motion.article
              className="photo-card"
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35 }}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Impacto esperado en estudiantes"
      >
        <ul>
          <li>Mayor dominio de estructuras de datos y tecnicas de optimizacion.</li>
          <li>Mejor desempeno en entrevistas tecnicas y hackathons.</li>
          <li>Disciplina de estudio constante con objetivos medibles por contest.</li>
          <li>Exposicion temprana a colaboracion y toma de decisiones en equipo.</li>
        </ul>
      </Modal>
    </AnimatedPage>
  )
}
