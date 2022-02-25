import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">inicio</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/recetas">recetas</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <Link to="/contacto">contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
