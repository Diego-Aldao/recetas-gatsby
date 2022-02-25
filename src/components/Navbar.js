import React, { useState } from "react"
import { Link } from "gatsby"
import { FaAlignJustify } from "react-icons/fa"
const Navbar = () => {
  const [mostrar, setMostrar] = useState(false)

  const handleClick = () => {
    setMostrar(!mostrar)
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <p>
              <span>recetas</span> simples
            </p>
          </Link>
          <button className="nav-btn" onClick={handleClick}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={mostrar ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            inicio
          </Link>
          <Link
            to="/recetas"
            className="nav-link"
            activeClassName="active-link"
          >
            recetas
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contacto" className="btn">
              contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
