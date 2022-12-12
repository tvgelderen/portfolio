import Head from 'next/head'

import Hero from './sections/Hero'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

import { hero } from '../languages/hero'
import { skills } from '../languages/skills'
import { projects } from '../languages/projects'
import { contact } from '../languages/contact'

import { useAppContext } from '../context/AppContext'

const Layout = () => {
    let { language } = useAppContext();

    if (language === null)
      language = 'en'
  
    const heroContent = hero.get(language) === undefined ? hero.get('en') : hero.get(language);
    const skillsContent = skills.get(language) === undefined ? skills.get('en') : skills.get(language);
    const projectsContent = projects.get(language) === undefined ? projects.get('en') : projects.get(language);
    const contactContent = contact.get(language) === undefined ? contact.get('en') : contact.get(language);
  
    // useEffect(() => {
    //   const doc = document.documentElement;
      
    //   const updateCoordinates = (event: any) => {
    //     doc.style.setProperty('--x', event.clientX + 'px');
    //     doc.style.setProperty('--y', event.clientY + 'px');
    //   }
  
    //   window.addEventListener('mousemove', updateCoordinates);
  
    //   return () => window.removeEventListener('mousemove', updateCoordinates);
    // }, []);
  
    return (
      <div className='h-full'>
        <Head>
          <title>Timen van Gelderen - Portfolio</title>
          <link rel="icon" href="img/icons/favicon.ico" />
        </Head>
  
        <Hero content={heroContent} />
        {/* <div className='hidden lg:block cursor-circle overflow-hidden'>
          <Hero content={heroContent} />
          <div className='dot' />
        </div> */}
      
        <Skills content={skillsContent} />

        <Projects content={projectsContent} />

        {/*<About content={aboutContent} />*/}
      
        <Contact content={contactContent} />
      </div>
    )
}

export default Layout