import { CRONOGRAMA } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Programacao() {
  return (
    <section id="programacao" className="bg-papel py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-marinho sm:text-4xl">
            Como funcionam os três dias
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed">
            O ritmo clássico de hackathon: entender o problema, construir a
            solução, apresentar pra banca. A programação com horários sai junto
            com o regulamento no site oficial.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {CRONOGRAMA.map((dia, i) => (
            <Reveal key={dia.dia}>
              <li
                className={`h-full border-2 border-marinho/15 border-t-4 bg-white p-7 transition-all duration-200 hover:-translate-y-1 ${
                  ['border-t-turquesa hover:border-turquesa', 'border-t-esmeralda hover:border-esmeralda', 'border-t-amarelo hover:border-amarelo'][i % 3]
                }`}
              >
                <p
                  className={`text-sm font-bold uppercase tracking-widest ${
                    ['text-turquesa-escuro', 'text-esmeralda-escuro', 'text-amarelo-escuro'][i % 3]
                  }`}
                >
                  {String(i + 1).padStart(2, '0')} · {dia.dia}
                </p>
                <h3 className="mt-2 text-xl font-bold text-marinho">{dia.titulo}</h3>
                <ul className="mt-4 space-y-2 font-sans leading-relaxed text-tinta/85">
                  {dia.itens.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span className="text-turquesa-escuro" aria-hidden="true">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
