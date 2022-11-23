import React from 'react'
import Image from 'next/image'
import { SkillData } from './data/SkillData'
import { BsGithub, BsEye, BsInfoCircle } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
    project: any
}

const ProjectCard = ({ project }: Props) => {
    const projectSkills = SkillData.filter(skill => project.skills.includes(skill.name));
    const router = useRouter();

    return (
        <div className='w-[90%] max-w-[850px] m-auto shadow-md dark:shadow-dark-900 duration-300 rounded-lg bg-light-background dark:bg-dark-background'>
            <div className='relative w-full'>
                <Image
                src={project.images[0]}
                alt={project.id}
                width={1980}
                height={1080}
                className="w-full h-full object-cover object-center rounded-t-lg"
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/50 group flex justify-center items-center text-white'>
                    <a href={project.githubURL} target="_blank" className='hidden group-hover:block cursor-pointer'>
                        <BsGithub className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </a>
                    <a href={project.liveURL} target="_blank" className='hidden group-hover:block cursor-pointer mx-16'>
                        <BsEye className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </a>
                    <Link href={`/projects/${project.id}`} className='hidden group-hover:block cursor-pointer'>
                        <BsInfoCircle className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
                    </Link>
                </div>
            </div>
            <div className='p-4'>
                <div className='w-full flex justify-evenly'>
                    {projectSkills.map(skill => (
                        <div key={skill.name} className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px] hover:scale-110 duration-200'>
                            <Image
                              src={skill.image}
                              alt={skill.name}
                              width={50}
                              height={50}
                              className="h-full w-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
