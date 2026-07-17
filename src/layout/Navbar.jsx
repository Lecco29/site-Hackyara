import { useState } from 'react'
import { LINKS, NAV_ITEMS } from '../data.js'

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-marinho/10 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="flex items-center" onClick={() => setAberto(false)}>
          <img
            src="/logo-hackyara.png"
            alt="HACKYARA — Hackathon de Inovação, Santa Helena-PR, Terra das Águas"
            className="h-8 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-marinho/80 transition-colors hover:text-turquesa-escuro"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={LINKS.inscricao}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-turquesa px-4 py-1.5 font-display text-sm font-semibold text-marinho transition-colors hover:bg-white"
            >
              Inscreva-se
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-marinho lg:hidden"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {aberto && (
        <div className="border-t border-marinho/10 bg-white px-4 pb-6 pt-2 lg:hidden">
          <ul className="divide-y divide-marinho/5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="block py-3 font-medium text-marinho"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={LINKS.inscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-md bg-turquesa px-5 py-3 text-center font-display font-semibold text-marinho"
          >
            Inscreva-se
          </a>
        </div>
      )}
    </header>
  )
}
