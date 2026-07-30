import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Letreiro from './components/Letreiro.jsx'
import Inscricao from './components/Inscricao.jsx'
import Stats from './components/Stats.jsx'
import Evento from './components/Evento.jsx'
import Desafio from './components/Desafio.jsx'
import Programacao from './components/Programacao.jsx'
import Premiacao from './components/Premiacao.jsx'
import Participe from './components/Participe.jsx'
import Patrocinio from './components/Patrocinio.jsx'
import Apoiadores from './components/Apoiadores.jsx'
import Faq from './components/Faq.jsx'
import ChamadaFinal from './components/ChamadaFinal.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Letreiro />
        <Inscricao />
        <Stats />
        <Evento />
        <Desafio />
        <Programacao />
        <Premiacao />
        <Participe />
        <Patrocinio />
        <Apoiadores />
        <Faq />
        <ChamadaFinal />
      </main>
      <Footer />
    </>
  )
}
