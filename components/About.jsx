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
            <div className='grid lg:grid-cols-5 md:grid-cols-7 grid-cols-1'>
                <div className='lg:col-span-3 md:col-span-5 col-span-1'>
                    <h3 className={sectionTitle}>{content.title}</h3>

                    {content.paragraphs.map(paragraph => (
                        <p className={sectionContent}>{paragraph}</p>
                    ))}
                </div>
                <div className='md:col-span-2 col-span-1'>
                    <motion.img 
                        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" 
                        alt="" 
                        className='md:w-[90%] sm:w-[70%] w-[80%] m-auto rounded-2xl shadow-lg shadow-dark-900'
                        initial="offscreen"
                        whileInView="onscreen"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        viewport={{ once: false }}
                        variants={{
                            offscreen: {
                                x: 300
                            },
                            onscreen: {
                                x: 0,
                                y: 12,
                                transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 1.5
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default About
