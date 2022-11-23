import Image from 'next/image'
import React from 'react'

type Props = {
    image: string
    name: string
}

const ProjectHero = ({ image, name }: Props) => {
    return (
        <div className=''>
            <Image
              src={image}
              alt=""
              width={2560}
              height={1440}
              className="absolute w-full max-h-screen object-cover object-left-top"
            />
            {/* <div className='fixed w-full h-[62vw] max-h-screen bg-black/50 dark:bg-black/60 backdrop-blur-[2px] md:backdrop-blur-[4px] 2xl:backdrop-blur-[6px] flex justify-center items-center'>
                <div>
                    <h1 className='lg:text-7xl 2xl:text-8xl'>{name}</h1>
                </div>
            </div> */}
        </div>
    )
}

export default ProjectHero;