import React from 'react'
import { useAppContext } from '../context/AppContext'
import { about } from '../languages/about'
import { sectionContent, sectionTitle, sectionHead, sectionStyle } from './SectionStyles'

const About = () => {
    const { language } = useAppContext()

    const content = about[language] === undefined ? about['en'] : about[language]

    return (
        <div id='about' className={sectionStyle}>
            <p className={sectionHead}>{content.head}</p>

            <h3 className={sectionTitle}>{content.title}</h3>

            {content.paragraphs.map(paragraph => (
                <p className={sectionContent}>{paragraph}</p>
            ))}
        </div>
    )
}

export default About
