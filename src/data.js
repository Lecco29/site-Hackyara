export const LINKS = {
  inscricao: 'https://www.sympla.com.br/evento/hackyara-2026/3466232?qrcode=true',
  site: 'https://superhackathon.com.br/',
  // regulamento próprio do HACKYARA; o do Super Hackathon segue em LINKS.site
  regulamento: '/regulamento-hackyara-2026.pdf',
  formDesafios:
    'https://docs.google.com/forms/d/e/1FAIpQLScfH1PBZFbv7zMCElyu1fG4VZS3zdXsM7D05reoJ3EV_UY-PA/viewform',
  email: 'incubadora-sh@utfpr.edu.br',
  whatsapp1: { label: '(45) 98802-6063', url: 'https://wa.me/5545988026063' },
  whatsapp2: { label: '(45) 99962-5669', url: 'https://wa.me/5545999625669' },
}

export const NAV_ITEMS = [
  { label: 'Inscrições', href: LINKS.inscricao, externo: true },
  { label: 'Regulamento', href: LINKS.regulamento, externo: true },
  { label: 'Desafios', href: '#desafio' },
  { label: 'Envie seu desafio', href: LINKS.formDesafios, externo: true },
  { label: 'Premiação', href: '#premiacao' },
]

export const STATS = [
  { valor: 6000, prefixo: 'R$ ', sufixo: '', rotulo: 'em prêmios' },
  { valor: 3, prefixo: '', sufixo: '', rotulo: 'dias de maratona' },
  { valor: 100, prefixo: '', sufixo: '+', rotulo: 'participantes' },
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
  { posicao: '1º lugar', valor: 'R$ 3.000', destaque: true },
  { posicao: '2º lugar', valor: 'R$ 2.000', destaque: false },
  { posicao: '3º lugar', valor: 'R$ 1.000', destaque: false },
]
