import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    content: any
}

const About = ({ content }: Props) => {
    return (
        <div className="sectionStyle">
            <p className="sectionHead">{content.head}</p>
            <h3 className="sectionTitle">{content.title}</h3>

            <motion.img 
                src="https://images.unsplash.com/photo-1508921108053-9f757ead871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="" 
                className='float-left lg:w-[30%] md:w-[40%] w-[50%] mr-4 mb-2 mt-[20px] m-auto rounded-2xl shadow-lg shadow-dark-900'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
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

            {content.paragraphs.map((paragraph:string, index:number) => (
                <p key={index} className="sectionContent">{paragraph}</p>
            ))}
        </div>
    )
}

export default About
