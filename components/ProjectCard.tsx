import React from 'react'
import Image from 'next/image'
import { SkillData } from './data/SkillData'
import { BsGithub, BsEye, BsInfoCircle } from 'react-icons/bs'
import Link from 'next/link'
import { useAppContext } from '../context/AppContext'

type Props = {
    project: any,
    index: number
}

const ProjectCard = ({ project, index }: Props) => {
    let { language, setLogo } = useAppContext();

    const projectSkills = SkillData.filter(skill => project.skills.includes(skill.name));
    const projectContent = project?.content.get(language) === undefined ? project?.content.get('en') : project.content.get(language);

    return (
        <div className='lg:w-[90%] md:w-[90%] sm:w-[70%] m-auto grid lg:grid-cols-2 my-4 rounded-lg bg-dark-secondary'>
                <div className='lg:hidden'>
                    <Image
                        src={project.images[0]}
                        alt={project.name}
                        width={1080}
                        height={720}
                        className="rounded-t-lg object-cover object-left-top"
                    />
                </div>
                {index % 2 === 0 && 
                    <div>
                        <Image
                            src={project.images[0]}
                            alt={project.name}
                            width={1080}
                            height={720}
                            className="hidden lg:block h-full w-full rounded-l-lg object-cover object-left-top"
                        />
                    </div>}
                <div className='relative flex flex-col justify-between'>
                    <div>
                        <div className='w-[75%] m-auto flex justify-evenly items-center py-2 border-b-2 border-dark-500'>
                            {SkillData.filter(skill => project.skills.includes(skill.name)).map(skill => (
                                <div className='group flex flex-col justify-center items-center'>
                                    <Image
                                      src={skill.image}
                                      alt={skill.name}
                                      width={60}
                                      height={60}
                                      className="w-7"
                                    />
                                    <p className='absolute pt-14 hidden group-hover:block text-center'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className='px-4 py-2'>
                            {projectContent.description}
                        </div>
                    </div>
                    <div className='px-4 py-4 flex'>
                        <a target="_blank" href={project.liveURL} className="flex dark:bg-dark-theme/30 hover:dark:bg-dark-theme/75 px-2 py-1 mr-4 rounded">
                            <BsEye className='h-5 w-4 mr-1' /><p className='text-sm'>Live Demo</p>
                        </a>
                        <a target="_blank" href={project.githubURL} className="flex dark:bg-dark-theme/30 hover:dark:bg-dark-theme/75 px-2 py-1 rounded">
                            <BsGithub className='h-5 w-4 mr-1' /><p className='text-sm'>Code</p>
                        </a>
                    </div>
                </div>
                {index % 2 !== 0 && 
                    <div>
                        <Image
                            src={project.images[0]}
                            alt={project.name}
                            width={1080}
                            height={720}
                            className="hidden lg:block h-full w-full rounded-r-lg object-cover object-left-top"
                        />
                    </div>}
            </div>

        // <div className='w-[90%] max-w-[850px] m-auto shadow-md dark:shadow-dark-900 duration-300 rounded-lg bg-light-background dark:bg-dark-background'>
        //     <div className='relative w-full'>
        //         <Image
        //         src={project.images[0]}
        //         alt={project.id}
        //         width={1980}
        //         height={1080}
        //         className="w-full h-full object-cover object-center rounded-t-lg"
        //         />
        //         <div className='absolute top-0 left-0 w-full h-full hover:bg-black/50 group flex justify-center items-center text-white'>
        //             <a href={project.githubURL} target="_blank" className='hidden group-hover:block cursor-pointer'>
        //                 <BsGithub className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
        //             </a>
        //             <a href={project.liveURL} target="_blank" className='hidden group-hover:block cursor-pointer mx-16'>
        //                 <BsEye className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
        //             </a>
        //             <Link href={`/projects/${project.id}`} className='hidden group-hover:block cursor-pointer'>
        //                 <BsInfoCircle className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
        //             </Link>
        //         </div>
        //     </div>
        //     <div className='p-4'>
        //         <div className='w-full flex justify-evenly'>
        //             {projectSkills.map(skill => (
        //                 <div key={skill.name} className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px] hover:scale-110 duration-200'>
        //                     <Image
        //                       src={skill.image}
        //                       alt={skill.name}
        //                       width={50}
        //                       height={50}
        //                       className="h-full w-full object-contain"
        //                     />
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProjectCard
