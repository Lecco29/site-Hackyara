export const LINKS = {
  inscricao: 'https://superhackathon.com.br/',
  email: 'incubadora-sh@utfpr.edu.br',
  whatsapp1: { label: '(45) 98802-6063', url: 'https://wa.me/5545988026063' },
  whatsapp2: { label: '(45) 98805-6072', url: 'https://wa.me/5545988056072' },
}

export const DATA_EVENTO = new Date('2026-09-04T08:00:00-03:00')

export const NAV_ITEMS = [
  { label: 'O evento', href: '#evento' },
  { label: 'O desafio', href: '#desafio' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Premiação', href: '#premiacao' },
  { label: 'Patrocínio', href: '#patrocinio' },
  { label: 'Dúvidas', href: '#faq' },
]

export const CRONOGRAMA = [
  {
    dia: 'Sexta',
    data: '04/09',
    titulo: 'Abertura e formação das equipes',
    itens: [
      'Credenciamento e boas-vindas na UTFPR',
      'Apresentação do desafio e das regras',
      'Formação das equipes',
      'Primeiras ideias e mapeamento do problema',
    ],
  },
  {
    dia: 'Sábado',
    data: '05/09',
    titulo: 'Mão na massa',
    itens: [
      'Dia inteiro de desenvolvimento das soluções',
      'Mentorias técnicas e de negócio',
      'Validação com quem vive o problema no campo',
      'Construção do protótipo',
    ],
  },
  {
    dia: 'Domingo',
    data: '06/09',
    titulo: 'Pitch e premiação',
    itens: [
      'Ajustes finais e treino de apresentação',
      'Pitch para a banca avaliadora',
      'Anúncio dos vencedores',
      'Premiação e encerramento',
    ],
  },
]

export const PREMIOS = [
  { posicao: '1º lugar', valor: 'R$ 3.500', destaque: true },
  { posicao: '2º lugar', valor: 'R$ 2.500', destaque: false },
  { posicao: '3º lugar', valor: 'R$ 1.500', destaque: false },
]

export const JORNADA = [
  {
    etapa: 'HACKYARA',
    local: 'Santa Helena · UTFPR',
    data: '04 a 06 de setembro',
    texto: 'A maratona local. Três dias em cima do desafio dos resíduos, com mentores e banca daqui da região.',
    atual: true,
  },
  {
    etapa: 'Super Hackathon',
    local: 'Paraná · Sebrae/PR',
    data: 'Etapas em todo o estado',
    texto: 'O HACKYARA é uma das etapas do circuito estadual de hackathons do Sebrae/PR, que acontece em várias cidades do Paraná ao longo do ano.',
    atual: false,
  },
  {
    etapa: 'Summit Iguassu Valley',
    local: 'Foz do Iguaçu',
    data: '18 a 20 de setembro',
    texto: 'O grande encontro de inovação da região. Quem se destacar no HACKYARA apresenta por lá, junto com equipes do estado inteiro.',
    atual: false,
  },
]

export const COTAS = ['Diamante', 'Ouro', 'Prata', 'Bronze']

export const FAQ = [
  {
    pergunta: 'Preciso saber programar?',
    resposta:
      'Não. As melhores equipes misturam perfis: quem entende do campo, quem desenha, quem apresenta bem e quem programa. O desafio pede uma solução, e ela nem sempre é um aplicativo.',
  },
  {
    pergunta: 'Posso me inscrever sem equipe?',
    resposta:
      'Pode. A formação das equipes acontece na abertura do evento, e a organização ajuda quem chega sozinho a encontrar um time. As regras de composição estão no regulamento.',
  },
  {
    pergunta: 'Quem pode participar?',
    resposta:
      'O evento é aberto a estudantes, profissionais e qualquer pessoa interessada em inovação no agro. Os requisitos completos (idade, tamanho das equipes, documentos) estão no regulamento oficial, no site do Super Hackathon.',
  },
  {
    pergunta: 'Onde acontece?',
    resposta:
      'Na UTFPR Campus Santa Helena, no Extremo Oeste do Paraná. O evento é presencial, de sexta a domingo.',
  },
  {
    pergunta: 'Como faço a inscrição?',
    resposta:
      'Pelo site oficial do Super Hackathon, o superhackathon.com.br. Lá também ficam o regulamento e os documentos do evento. Qualquer dúvida, chama a organização no WhatsApp.',
  },
]
