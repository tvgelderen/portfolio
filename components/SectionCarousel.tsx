import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { motion, AnimatePresence } from 'framer-motion' 

import { about } from '../languages/about'
import { contact } from '../languages/contact'
import { hero } from '../languages/hero'
import { projects } from '../languages/projects'
import { skills } from '../languages/skills'

import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const SectionCarousel = () => {
    const [current, setCurrent] = useState<number>(0);
    
    const [startY, setStartY] = useState<number>(0);

    let { language } = useAppContext();
  
    if (language === null)
      language = 'en'

    const heroContent = hero.get(language) === undefined ? hero.get('en') : hero.get(language);
    const aboutContent = about.get(language) === undefined ? about.get('en') : about.get(language);
    const skillsContent = skills.get(language) === undefined ? skills.get('en') : skills.get(language);
    const projectsContent = projects.get(language) === undefined ? projects.get('en') : projects.get(language);
    const contactContent = contact.get(language) === undefined ? contact.get('en') : contact.get(language);

    return (
        <div className=''>
            <AnimatePresence>
                {current === 0 && (
                    <motion.section id='hero' className=''
                    drag="y"
                    dragConstraints={{ top: 0, bottom: 0 }}
                    dragElastic={0.5}
                    onDragStart={(event, info) => setStartY(info.point.y)}
                    onDragEnd={(event, info) => {
                        if (startY - info.point.y >= 100)
                        {
                            setCurrent(1)
                        }
                    }}
                    initial="visible"
                    animate="visible"
                    exit="exit"
                    variants={{
                        visible: { x: 0, y: 0 },
                        exit: { y: -1000 }
                    }}
                    >
                        <Hero content={heroContent} />
                    </motion.section>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {current === 1 && (
                    <motion.section id='about' className=''
                      drag="y"
                      dragConstraints={{top:0, left:0, right:0, bottom:0}}

                    >
                        <About content={aboutContent} />
                    </motion.section>
                )}
            </AnimatePresence>

            {current === 2 && (
                <section id='skills' className=''>
                    <Skills content={skillsContent} />
                </section>
            )}

            {current === 3 && (
                <section id='projects' className=''>
                    <Projects content={projectsContent} />
                </section>
            )}

            {current === 4 && (
                <section id='contact' className=''>
                    <Contact content={contactContent} />
                </section>
            )}            
        </div>
    )
}

export default SectionCarousel