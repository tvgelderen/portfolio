import React from 'react'
import { sectionStyle, sectionHead, sectionTitle } from '../SectionStyles'
import { projects } from '../../languages/projects'

import { useAppContext } from '../../context/AppContext'

const Projects = () => {
    const { language } = useAppContext();

    const content = projects[language] === undefined ? projects['en'] : projects[language]

    return (
        <div className={sectionStyle}>
            <p className={sectionHead}>{content.head}</p>
            <h3 className={sectionTitle}>{content.title}</h3>
        </div>
    )
}

export default Projects
