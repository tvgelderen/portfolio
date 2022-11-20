import Image from 'next/image'
import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className='w-[100%] max-w-[800px] m-auto p-4 snap-center'>
            <Image
              src={project.images[0]}
              alt={project.name}
              width={2560}
              height={1440}
              className="w-full h-full object-cover object-center"
            />
        </div>
    )
}

export default ProjectCard
