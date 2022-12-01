import Head from 'next/head'

import Hero from '../../components/sections/Hero'
import About from '../../components/sections/About'
import Skills from '../../components/sections/Skills'
import Projects from '../../components/sections/Projects'
import Contact from '../../components/sections/Contact'

import { hero } from '../../languages/hero'
import { about } from '../../languages/about'
import { skills } from '../../languages/skills'
import { projects } from '../../languages/projects'
import { contact } from '../../languages/contact'

import { useAppContext } from '../../context/AppContext'

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
    <div className='h-full'>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="img/icons/favicon.ico" />
      </Head>

      <section id='hero' className=''>
        <Hero content={heroContent} />
      </section>

      <div className=''>
        <section id='about' className=''>
          <About content={aboutContent} />
        </section>
        
        <section id='skills' className=''>
          <Skills content={skillsContent} />
        </section>

        <section id='projects' className=''>
          <Projects content={projectsContent} />
        </section>
        
        <section id='contact' className=''>
          <Contact content={contactContent} />
        </section>
      </div>
    </div>
  )
}
