import React from 'react'
import { useAppContext } from '../context/AppContext'
import { about } from '../languages/about'
import { sectionContent, sectionTitle, sectionHead, sectionStyle } from './SectionStyles'
import { motion } from 'framer-motion'

const About = () => {
    const { language } = useAppContext()

    const content = about[language] === undefined ? about['en'] : about[language]

    return (
        <div id='about' className={sectionStyle}>
            <p className={sectionHead}>{content.head}</p>
                    <h3 className={sectionTitle}>{content.title}</h3>

                    <motion.img 
                        src="https://images.unsplash.com/photo-1508921108053-9f757ead871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                        alt="" 
                        className='float-right lg:w-[40%] md:w-[50%] w-[60%] ml-4 mb-4 mt-[-32px] m-auto rounded-2xl shadow-lg shadow-dark-900'
                        initial="offscreen"
                        whileInView="onscreen"
                        whileHover={{ scale: 1.1, rotate: 4 }}
                        viewport={{ once: false }}
                        variants={{
                            offscreen: {
                                x: 250
                            },
                            onscreen: {
                                x: 0,
                                y: 0,
                                transition: {
                                type: "spring",
                                bounce: 0.3,
                                duration: 1.5
                                }
                            }
                        }}
                    />

                    {content.paragraphs.map(paragraph => (
                        <p className={sectionContent}>{paragraph}</p>
                    ))}
        </div>
    )
}

export default About
