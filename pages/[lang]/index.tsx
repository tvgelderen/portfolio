import Head from 'next/head'

import Hero from '../../components/sections/Hero'
import About from '../../components/sections/About'
import Skills from '../../components/sections/Skills'
import Projects from '../../components/sections/Projects'
import Contact from '../../components/sections/Contact'
import ThemeChanger from "../../components/ThemeChanger"

import { hero } from '../../languages/hero'
import { about } from '../../languages/about'
import { skills } from '../../languages/skills'
import { projects } from '../../languages/projects'
import { contact } from '../../languages/contact'

import { useAppContext } from '../../context/AppContext'
import { BsChevronUp } from 'react-icons/bs'

export default function Home() {
  let { language } = useAppContext();

  if (language === null)
    language = 'en'

  const heroContent = hero.get(language) === undefined ? hero.get('en') : hero.get(language);
  const aboutContent = about.get(language) === undefined ? about.get('en') : about.get(language);
  const skillsContent = skills.get(language) === undefined ? skills.get('en') : skills.get(language);
  const projectsContent = projects.get(language) === undefined ? projects.get('en') : projects.get(language);
  const contactContent = contact.get(language) === undefined ? contact.get('en') : contact.get(language);

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      
      <section id='hero' className='snap-center'>
        <Hero content={heroContent} />
      </section>

      <section id='about' className='snap-start'>
        <About content={aboutContent} />
      </section>
      
      <section id='skills' className='snap-start'>
        <Skills content={skillsContent} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects content={projectsContent} />
      </section>
      
      <section id='contact' className='snap-start'>
        <Contact content={contactContent} />
      </section>

      <ThemeChanger />

      <div 
        className='z-[2] fixed bottom-5 left-0 right-0 flex justify-center items-center cursor-pointer'
        onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: "smooth" })}  
      >
        <BsChevronUp size={24} color="white" className='xl:w-10 xl:h-10' />
      </div>
    </div>
  )
}
