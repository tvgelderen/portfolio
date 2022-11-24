import React, { useEffect, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import ProjectCard from '../ProjectCard'
import { ProjectData } from '../data/ProjectData'

type Props = {
    content: any
}

const Projects = ({ content }: Props) => {
    return (
        <div className="sectionStyle">
            <div className="sectionContent">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-1 pt-4'>
                    {ProjectData?.map((project, index) => (
                        <ProjectCard project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects