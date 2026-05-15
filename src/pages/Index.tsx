import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { Expertise } from "../components/Expertise"
import { Projects } from "../components/Projects"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Expertise />
      <Projects />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}
