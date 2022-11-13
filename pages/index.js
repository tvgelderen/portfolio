import Head from 'next/head'

import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className='bg-white dark:bg-primary'>
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
    </div>
  )
}
