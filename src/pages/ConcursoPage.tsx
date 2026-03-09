import { useState } from 'react'
import { AnimatedPage } from '../components/AnimatedPage'
import { Modal } from '../components/Modal'

export function ConcursoPage() {
  const [openModal, setOpenModal] = useState<'registro' | 'banco' | null>(null)

  return (
    <AnimatedPage className="page">
      <section className="hero">
        <p className="eyebrow">ITM - 61 Aniversario</p>
        <h1>Concurso de Programacion Competitiva</h1>
        <p className="subtitle">
          Organizado por el Capitulo de Algoritmia y Programacion Competitiva ITM.
          Encuentra aqui toda la informacion operativa del evento.
        </p>
      </section>

      <section className="card">
        <h2>Datos del evento</h2>
        <div className="grid">
          <article>
            <h3>Fecha</h3>
            <p>Por confirmar</p>
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
        <p>Concepto: Concurso 61 Aniversario ITM + nombre del equipo</p>
      </Modal>
    </AnimatedPage>
  )
}