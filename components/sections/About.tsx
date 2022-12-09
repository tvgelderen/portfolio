import React from 'react'
import Image from 'next/image'

type Props = {
    content: any
}

const About = ({ content }: Props) => {
    return (
        <div className="sectionEven">
            <div className="about" style={{}}>
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>

                <div className='grid lg:grid-cols-3'>
                    <div className='lg:col-span-2 m-auto'>
                        {content.paragraphs.map((paragraph:string, index:number) => (
                            <p key={index} className="p-4 text-justify">{paragraph}</p>
                        ))}
                    </div>
                    <div className='hidden lg:block'>
                        <Image
                          src='/img/spray.png'
                          alt=''
                          width={1920}
                          height={1080}
                          className='rounded-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
