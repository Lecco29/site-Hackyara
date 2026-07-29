import Reveal from './Reveal.jsx'

export default function Evento() {
  return (
    <section id="evento" className="bg-marinho py-16 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative">
            <img
              src="/logo-hackyara-horizontal.png"
              alt="Logotipo HACKYARA: no lugar do Y, a cauda da Iara emergindo da água"
              className="foto-moldura w-full -rotate-1 bg-white px-6 py-8 transition-transform duration-300 hover:rotate-0 sm:px-10 sm:py-12"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Por que <span className="text-turquesa">"Hackyara"</span>?
          </h2>
          <div className="mt-6 space-y-5 font-sans text-lg leading-relaxed text-white/85">
            <p>
              Iara, a Mãe d'Água do folclore brasileiro, tem nome de raiz
              tupi: <em>'y</em> (água) + <em>iara</em> (senhora). Santa Helena
              vive às margens do Lago de Itaipu e carrega o apelido de Terra
              das Águas, então a escolha foi natural.
            </p>
            <p>
              No lugar do "Y" do logo está a cauda da Iara emergindo da água:
              sai do azul profundo do lago, passa pelo verde do campo e chega à
              superfície turquesa. O mesmo caminho que a gente quer pras
              ideias.
            </p>
            <p>
              O HACKYARA é a etapa de Santa Helena do Super Hackathon, o
              circuito de inovação do Sebrae/PR. Não precisa chegar com equipe
              pronta nem saber programar: precisa topar construir uma solução
              do zero.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
