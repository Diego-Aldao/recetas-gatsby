import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="blurred"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>recetas simples</h1>
              <h4>sin vueltas, solo recetas</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}
