import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../../../components/layout/Footer'
import { Navbar } from '../../../components/layout/Navbar'

type LegalPageLayoutProps = {
  title: string
  intro: string
  children: ReactNode
}

export function LegalPageLayout({ title, intro, children }: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="container legal-container">
          <Link className="legal-back-link" to="/">← Volver a VetFlow</Link>
          <header className="legal-header">
            <span className="eyebrow">VETFLOW · INFORMACIÓN LEGAL</span>
            <h1>{title}</h1>
            <p>{intro}</p>
            <span className="legal-updated">Última actualización: 29 de octubre de 2026</span>
          </header>
          <article className="legal-content">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  )
}
