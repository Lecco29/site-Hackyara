import { CRONOGRAMA } from '../data.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function Programacao() {
  return (
    <section id="programacao" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>Programação</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-marinho sm:text-5xl">
            Como funcionam os três dias
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed">
            A maratona segue o ritmo clássico de hackathon: entender o
            problema, construir a solução, apresentar pra banca. A programação
            detalhada, com horários, sai junto com o regulamento no site
            oficial.
          </p>
        </Reveal>

        <ol className="mt-14">
          {CRONOGRAMA.map((dia) => (
            <li key={dia.data}>
              <Reveal className="grid gap-3 border-t border-marinho/10 py-9 lg:grid-cols-[11rem_18rem_1fr] lg:gap-8">
                <p className="font-display">
                  <span className="block text-3xl font-bold tracking-tight text-marinho">
                    {dia.dia}
                  </span>
                  <span className="text-sm text-tinta/60 tabular-nums">{dia.data}</span>
                </p>
                <h3 className="font-display text-xl font-semibold tracking-tight text-turquesa-escuro">
                  {dia.titulo}
                </h3>
                <ul className="space-y-1.5 leading-relaxed">
                  {dia.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <figure className="border-t border-marinho/10 pt-10">
            <img
              src="/img/campus-utfpr.jpg"
              alt="Vista aérea da UTFPR Campus Santa Helena, cercada de mata, com o Lago de Itaipu ao fundo"
              loading="lazy"
              className="aspect-[21/9] w-full rounded-xl object-cover"
            />
            <figcaption className="mt-4 text-sm text-tinta/60">
              <span className="font-display font-semibold text-turquesa-escuro">
                <span aria-hidden="true">//&nbsp;</span>O local
              </span>{' '}
              — UTFPR Campus Santa Helena, às margens do Lago de Itaipu. É aqui
              que tudo acontece, de sexta a domingo.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
