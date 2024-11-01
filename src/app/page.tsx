
import Image from "next/image"
import Hero from "@/components/Hero/Hero"
import Skills from "@/components/Skills/Skills"
import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer/Footer"


const home = () => {
  return (
    <main>
      
      <Hero />
      <Skills/>
      <About/>
      <Contact/>
    </main>
  )
}

export default home