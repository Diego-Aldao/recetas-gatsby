import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Normcore actually taxidermy, air plant</h2>
            <p>
              Man bun readymade woke polaroid crucifix, fixie vexillologist
              pitchfork hexagon sustainable tumblr raclette portland.
            </p>
            <p>
              Migas squid art party, adaptogen raclette portland woke polaroid
            </p>
            <Link to="/contact" className="btn">
              contacto
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="persona hechando sal"
            className="about-img"
          />
        </section>
      </main>
    </Layout>
  )
}
