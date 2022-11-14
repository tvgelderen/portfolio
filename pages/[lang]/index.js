import Head from 'next/head'

import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import ThemeChanger from "../../components/ThemeChanger"
import NextComponent from '../../components/NextComponent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Skills />
      {/* <Projects />
      <Contact /> */}

      <ThemeChanger />
      <NextComponent />
    </div>
  )
}
