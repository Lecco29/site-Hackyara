import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function Evento() {
  return (
    <section id="evento" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>O evento</Eyebrow>
          <h2
            className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-marinho sm:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            Um fim de semana pra tirar uma ideia do papel
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1px_0.9fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                O HACKYARA é a etapa de Santa Helena do Super Hackathon, o
                circuito de inovação do Sebrae/PR. De 04 a 06 de setembro, a
                UTFPR abre as portas pra estudantes, produtores rurais e
                profissionais de tecnologia passarem três dias atacando um
                desafio real do agro da região.
              </p>
              <p>
                Não precisa chegar com equipe pronta nem saber programar.
                Precisa topar construir uma solução do zero, com mentoria de
                quem já empreende e uma banca que conhece o setor. As melhores
                propostas ganham prêmio em dinheiro, encaminhamento pra
                incubação na Sprint e seguem na jornada até o Summit Iguassu
                Valley, em Foz do Iguaçu.
              </p>
            </div>
          </Reveal>

          <div className="hidden bg-marinho/10 lg:block" aria-hidden="true" />

          <Reveal>
            <aside className="border-t border-marinho/10 pt-8 lg:border-t-0 lg:pt-0">
              <div className="flex items-start gap-5">
                <img src="/favicon.png" alt="" className="w-14 shrink-0 opacity-90" />
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-marinho">
                    Por que "Hackyara"?
                  </h3>
                  <div className="mt-4 space-y-4 leading-relaxed text-tinta/90">
                    <p>
                      Iara, a Mãe d'Água do folclore brasileiro, tem nome de
                      raiz tupi: <em>'y</em> (água) + <em>iara</em> (senhora).
                      Santa Helena vive às margens do Lago de Itaipu e carrega
                      o apelido de Terra das Águas, então a escolha foi
                      natural.
                    </p>
                    <p>
                      No lugar do "Y" do logo está a cauda da Iara emergindo da
                      água: sai do azul profundo do lago, passa pelo verde do
                      campo e chega à superfície turquesa. O mesmo caminho que
                      a gente quer pras ideias.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
