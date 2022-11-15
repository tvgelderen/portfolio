import React from 'react'
import { useAppContext } from '../context/AppContext'
import { about } from '../languages/about'
import { sectionContent, sectionTitle, sectionHead, sectionStyle } from './SectionStyles'
import { motion } from 'framer-motion'

const About = () => {
    const { language } = useAppContext()

    const content = about[language] === undefined ? about['en'] : about[language]

    return (
        <div className={sectionStyle}>
            <p className={sectionHead}>{content.head}</p>
            <h3 className={sectionTitle}>{content.title}</h3>

            <motion.img 
                src="https://images.unsplash.com/photo-1508921108053-9f757ead871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="" 
                className='float-left lg:w-[40%] md:w-[45%] w-[60%] mr-4 mb-4 mt-[20px] m-auto rounded-2xl shadow-lg shadow-dark-900'
                initial="offscreen"
                whileInView="onscreen"
                whileHover={{ scale: 1.1, rotate: -4 }}
                viewport={{ once: false }}
                variants={{
                    offscreen: {
                        x: -200,
                        opacity: 0,
                    },
                    onscreen: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                        duration: 1.3
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
