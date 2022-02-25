import React from "react"
import Layout from "../components/Layout"

export default function error() {
  return (
    <Layout>
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h3>página no encontrada</h3>
        </section>
      </main>
    </Layout>
  )
}
