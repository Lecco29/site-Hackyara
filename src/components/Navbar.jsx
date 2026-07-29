import { useState } from 'react'
import { LINKS, NAV_ITEMS } from '../data.js'

export default function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-marinho/10 bg-papel/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" onClick={() => setAberto(false)}>
          <img
            src="/logo-hackyara.png"
            alt="HACKYARA — Hackathon de Inovação, Santa Helena-PR, Terra das Águas"
            className="h-9 w-auto"
          />
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm font-bold uppercase tracking-wider text-tinta transition-colors hover:text-turquesa-escuro"
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
              className="bg-amarelo px-4 py-2 text-sm font-bold text-marinho transition-colors hover:bg-turquesa"
            >
              Inscreva-se →
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
        <div className="border-t border-marinho/10 bg-papel px-4 pb-6 pt-2 lg:hidden">
          <ul className="divide-y divide-marinho/5">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  {...(item.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={() => setAberto(false)}
                  className="block py-3 font-bold uppercase tracking-wider text-marinho"
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
            className="mt-4 block bg-amarelo px-5 py-3 text-center font-bold text-marinho"
          >
            Inscreva-se →
          </a>
        </div>
      )}
    </header>
  )
}
