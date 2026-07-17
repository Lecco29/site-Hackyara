import Navbar from './layout/Navbar.jsx'
import Footer from './layout/Footer.jsx'
import Onda from './ui/Onda.jsx'
import Hero from './sections/Hero.jsx'
import Evento from './sections/Evento.jsx'
import Desafio from './sections/Desafio.jsx'
import Programacao from './sections/Programacao.jsx'
import Premiacao from './sections/Premiacao.jsx'
import Patrocinio from './sections/Patrocinio.jsx'
import Faq from './sections/Faq.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Evento />
        <Desafio />
        <Programacao />
        <Onda de="#ffffff" para="#08204d" />
        <Premiacao />
        <Onda de="#08204d" para="#ffffff" />
        <Patrocinio />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
