import Head from 'next/head'

import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import ThemeChanger from "../../components/ThemeChanger"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <section id='hero' className='snap-center' >
        <Hero />
      </section>

      <section id='about' className='snap-start'>
        <About />
      </section>
      
      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <ThemeChanger />
    </div>
  )
}
