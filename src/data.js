export const LINKS = {
  inscricao: 'https://www.sympla.com.br/evento/hackyara-2026/3466232?qrcode=true',
  site: 'https://superhackathon.com.br/',
  // regulamento próprio do HACKYARA; o do Super Hackathon segue em LINKS.site
  regulamento: '/regulamento-hackyara-2026.pdf',
  // formulários oficiais passados pela organização; o de demandantes substitui
  // o form antigo de desafios, que atendia o mesmo fluxo
  formDemandantes: 'https://forms.gle/q9ZPQ7tLRJhgCeHz9',
  formMentores: 'https://forms.gle/Q4boH3iAUThadetc7',
  email: 'incubadora-sh@utfpr.edu.br',
  // whatsapp1 é o contato que recebe patrocínio direto
  whatsapp1: { label: '(45) 98802-6063', url: 'https://wa.me/5545988026063' },
  whatsapp2: { label: '(45) 99962-5669', url: 'https://wa.me/5545999625669' },
}

export const NAV_ITEMS = [
  { label: 'Desafios', href: '#desafio' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Faça parte', href: '#participe' },
  { label: 'Premiação', href: '#premiacao' },
  { label: 'Regulamento', href: LINKS.regulamento, externo: true },
]

export const STATS = [
  { valor: 3, prefixo: '', sufixo: '', rotulo: 'dias de maratona' },
  { valor: 100, prefixo: '', sufixo: '+', rotulo: 'participantes' },
  { valor: 5, prefixo: 'até ', sufixo: '', rotulo: 'pessoas por equipe' },
]

export const CRONOGRAMA = [
  {
    dia: 'Sexta · 04/09',
    titulo: 'Abertura e formação das equipes',
    itens: ['Credenciamento na UTFPR', 'Apresentação do desafio', 'Formação das equipes', 'Mapeamento do problema'],
  },
  {
    dia: 'Sábado · 05/09',
    titulo: 'Mão na massa',
    itens: ['Dia inteiro de desenvolvimento', 'Mentorias técnicas e de negócio', 'Validação com quem vive o campo', 'Construção do protótipo'],
  },
  {
    dia: 'Domingo · 06/09',
    titulo: 'Pitch e premiação',
    itens: ['Treino de apresentação', 'Pitch pra banca avaliadora', 'Anúncio dos vencedores', 'Premiação e encerramento'],
  },
]

export const PREMIOS = [
  { posicao: '1º lugar', valor: 'R$ 1.500' },
  { posicao: '2º lugar', valor: 'R$ 1.000' },
  { posicao: '3º lugar', valor: 'R$ 500' },
]

// papéis que não são o de participante; os links vieram da organização
export const PARTICIPACOES = [
  {
    titulo: 'Seja um demandante',
    texto:
      'Sua empresa ou instituição tem um problema real de resíduos ou sustentabilidade no campo? Submeta o desafio e veja equipes trabalharem nele por três dias.',
    acao: 'Enviar meu desafio',
    href: LINKS.formDemandantes,
    externo: true,
    cor: 'esmeralda',
  },
  {
    titulo: 'Seja um mentor',
    texto:
      'Tem experiência em tecnologia, negócio ou agronegócio? Passe algumas horas com as equipes ajudando a tirar as soluções do papel.',
    acao: 'Quero mentorar',
    href: LINKS.formMentores,
    externo: true,
    cor: 'turquesa',
  },
  {
    titulo: 'Seja um patrocinador',
    texto:
      'Coloque sua marca na frente de mais de 100 talentos e do ecossistema de inovação do Oeste do Paraná. As cotas vão do Bronze ao Diamante.',
    acao: 'Falar no WhatsApp',
    href: LINKS.whatsapp1.url,
    externo: true,
    cor: 'amarelo',
  },
]
