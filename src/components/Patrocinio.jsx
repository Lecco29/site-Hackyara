import { LINKS } from '../data.js'
import Botao from './Botao.jsx'
import Reveal from './Reveal.jsx'

// mesma lapidação nas quatro cotas; o que muda é a paleta do metal.
// tons na ordem: mesa, coroa, pavilhão claro, pavilhão escuro
const COTAS = [
  { nome: 'Diamante', tons: ['#bfeaf7', '#6ec9e8', '#2e9cca', '#1d6a8e'] },
  { nome: 'Ouro', tons: ['#ffe9a8', '#ffd23f', '#f0b400', '#a67c00'] },
  { nome: 'Prata', tons: ['#eef2f6', '#c8d3de', '#a2b0bf', '#71808f'] },
  { nome: 'Bronze', tons: ['#f0c9a0', '#d69a5f', '#c17f43', '#8a5220'] },
]

// brilhante lapidado em facetas chapadas: mesa, duas faces de coroa e três de
// pavilhão. o contorno fino costura tudo e segura a leitura em tamanho pequeno
function Gema({ tons: [mesa, coroa, pavilhao, fundo] }) {
  return (
    <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" aria-hidden="true">
      <polygon points="6,26 20,12 20,26" fill={coroa} />
      <polygon points="20,12 44,12 44,26 20,26" fill={mesa} />
      <polygon points="44,12 58,26 44,26" fill={coroa} />
      <polygon points="6,26 20,26 32,56" fill={pavilhao} />
      <polygon points="20,26 44,26 32,56" fill={coroa} />
      <polygon points="44,26 58,26 32,56" fill={fundo} />
      <path
        d="M20 12h24l14 14-26 30L6 26z"
        fill="none"
        stroke={fundo}
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  )
}

export default function Patrocinio() {
  return (
    <section id="patrocinio" className="papel-grade relative overflow-hidden py-16 sm:py-24">
      <div className="mancha-turquesa absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-marinho sm:text-4xl">
            Sua marca no centro da inovação agropecuária
          </h2>
          <p className="mt-5 max-w-xl font-sans text-lg leading-relaxed">
            As cotas vão do Bronze ao Diamante, cada uma com espaço no evento,
            marca nas peças oficiais, agradecimentos nos pitches e presença nos
            materiais pós-evento. A proposta completa, com valores, é enviada
            por e-mail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Botao href={`mailto:${LINKS.email}?subject=Patrocínio HACKYARA 2026`} escuro>
              Pedir proposta de cotas
            </Botao>
            <Botao href={LINKS.whatsapp1.url} externo>
              Chamar no WhatsApp
            </Botao>
          </div>
        </Reveal>

        <Reveal>
          <ul className="grid grid-cols-2 gap-4">
            {COTAS.map((cota, i) => (
              <li
                key={cota.nome}
                className={`group overflow-hidden border-2 bg-white text-center text-xl font-bold transition-transform duration-200 hover:-translate-y-1 ${
                  i === 0
                    ? 'border-turquesa text-turquesa-escuro'
                    : i === 1
                      ? 'border-amarelo text-amarelo-escuro'
                      : 'border-marinho/20 text-marinho'
                }`}
              >
                <div className="px-4 pt-8 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Gema tons={cota.tons} />
                </div>
                <span className="block px-4 pb-7 pt-4">{cota.nome}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm text-tinta/60">
            Realização: UTFPR Campus Santa Helena · Sprint Incubadora · Super Hackathon Sebrae/PR
          </p>
        </Reveal>
      </div>
    </section>
  )
}
