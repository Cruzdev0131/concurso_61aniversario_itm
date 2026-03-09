import { NavLink } from 'react-router-dom'
import logoItm61 from '../assets/logicapsinfondo.png'
import escudoTecnm from '../assets/ESCUDO TEC fondo blanco Ok (1).png'

export function SiteHeader() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <NavLink className="brand" to="/" aria-label="Inicio ITM 61">
            <img
              src={logoItm61}
              alt="Logo ITM 61 aniversario"
              className="brand-logo brand-logo-main"
            />
            <span className="brand-separator" aria-hidden="true" />
            <img src={escudoTecnm} alt="Escudo TecNM" className="brand-logo brand-logo-tec" />
          </NavLink>

          <nav className="navbar desktop-nav" aria-label="Navegacion principal">
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to="/recursos"
            >
              Recursos
            </NavLink>
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to="/sabias-que"
            >
              Sabias que?
            </NavLink>
          </nav>
        </div>
      </header>

      <nav className="mobile-island-nav" aria-label="Navegacion movil">
        <NavLink className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`} to="/">
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
          to="/recursos"
        >
          Recursos
        </NavLink>
        <NavLink
          className={({ isActive }) => `mobile-nav-link${isActive ? ' active' : ''}`}
          to="/sabias-que"
        >
          Sabias que?
        </NavLink>
      </nav>
    </>
  )
}
