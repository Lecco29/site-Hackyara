// faixa deslizante estilo painel de aeroporto
const ITENS = ['HACKYARA 2026', 'SANTA HELENA-PR', 'TERRA DAS ÁGUAS', '04–06 SET', 'UTFPR', 'INSCRIÇÕES ABERTAS']

const CORES = ['text-amarelo', 'text-turquesa', 'text-esmeralda']

// o espaçamento vive dentro de cada item (pr-8), não como gap do flex: assim
// a largura do grupo é um período exato e o -50% cai no ponto idêntico
function Grupo() {
  return (
    <div className="flex shrink-0 items-center">
      {ITENS.map((item, i) => (
        <span key={i} className="flex items-center gap-8 pr-8 font-bold uppercase tracking-widest text-white/90">
          {item}
          <span className={CORES[i % 3]}>//</span>
        </span>
      ))}
    </div>
  )
}

export default function Letreiro() {
  return (
    <div className="overflow-hidden border-y-4 border-amarelo bg-marinho py-3" aria-hidden="true">
      {/* quatro grupos e deslocamento de -50%: o período são dois grupos, largo
          o bastante pra nunca faltar conteúdo na borda direita em telas largas */}
      <div className="letreiro flex w-max items-center">
        <Grupo />
        <Grupo />
        <Grupo />
        <Grupo />
      </div>
    </div>
  )
}
