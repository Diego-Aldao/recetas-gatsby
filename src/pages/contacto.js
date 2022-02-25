import React from "react"
import Layout from "../components/Layout"

export default function contacto() {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>quieres contactarte?</h3>
            <p>
              Scenester in meditation plaid kitsch, flexitarian retro
              farm-to-table prism mustache single-origin coffee williamsburg
              salvia four dollar toast.
            </p>
            <p>
              Ex edison bulb gastropub messenger bag seitan, tbh keffiyeh meh
              cornhole.
            </p>
            <p>
              Hella prism copper mug, ea roof party flannel hoodie beard
              flexitarian slow-carb. Neutra quis migas occupy.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">tu nombre</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">tu email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="comentarios">comentarios</label>
                <textarea name="comentarios" id="comentarios"></textarea>
              </div>
              <button type="submit" className="btn block">
                enviar
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}
