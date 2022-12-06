import React, { useState } from 'react'
import { SkillData } from '../data/SkillData'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Props = {
    content: any
}

const Skills = ({ content }: Props) => {
    const [selectedId, setSelectedId] = useState<number>(-1)

    const GetRow = (rowLen: number, i: number) => {
        let step = (SkillData.length - i)
        step = step < rowLen ? step : rowLen;

        const variants = {
            hidden: {
                y: -120 * (i / 3),
                opacity: 0,
            },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    delay: (i / 3) * 0.2
                }
            }
        }

        return (
            <motion.div
              className='flex justify-center items-center'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
            >
                {SkillData.slice(i, i + step).map((skill, index) => (
                    <div 
                      key={skill.name}
                      className='m-4 hover:scale-110 duration-300 justify-center'
                      onClick={() => setSelectedId(i + index)}  
                    >
                        <div className='p-6 rounded-t bg-[#1121e5]/30 dark:bg-dark-secondary'>
                            <img 
                              src={skill.image}
                              className='h-[65px] w-[65px] sm:h-[80px] sm:w-[80px] object-contain'
                            />
                        </div>
                        <div className='flex justify-center items-center p-2 rounded-b bg-[#1121e5]/60 dark:bg-dark-tertiary'>
                            <p className='lg:text-lg' style={{ fontWeight: 500 }}>{skill.name}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        )
    }

    const ShowRows = (rowLen:number) => {
        let steps = []

        for (let i = 0; i < SkillData.length; i+=rowLen)
            steps.push(i)

        return (
            <div className='grid grid-cols-1 mt-4 mb-2 md:my-12'>
                {steps.map(step => (
                    <span key={step}>
                        {GetRow(rowLen, step)}
                    </span>
                ))}
            </div>
        )
    }

    return (
        <div className="sectionEven">
            <div className="skills">
                <p className="sectionHead">{content.head}</p>
                <h3 className="sectionTitle">{content.title}</h3>

                <div className='md:hidden'>
                    {ShowRows(3)}
                </div>
                <div className='hidden md:block'>
                    {ShowRows(4)}
                </div>
            </div>
        </div>
    )
}

export default Skills
