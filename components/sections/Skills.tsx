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
                      className='m-4 hover:scale-125 duration-300 cursor-pointer justify-center'
                      onClick={() => setSelectedId(i + index)}  
                    >
                        <div className='p-6 rounded-t dark:bg-dark-secondary'>
                            <img 
                              src={skill.image}
                              className='h-[65px] w-[65px] sm:h-[80px] sm:w-[80px] object-contain'
                            />
                        </div>
                        <div className='flex justify-center items-center p-2 rounded-b dark:bg-dark-tertiary'>
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

                <AnimatePresence>
                    {selectedId !== -1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed z-[10] top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30 dark:bg-black/50"
                          onClick={() => setSelectedId(-1)}
                        >
                            <div 
                            className='bg-light-secondary dark:bg-dark-secondary p-6 rounded-xl' 
                            onClick={(event) => event.stopPropagation()}
                            >
                                <div className='flex justify-between items-center'>
                                    <Image
                                    src={SkillData[selectedId].image}
                                    alt={SkillData[selectedId].name}
                                    width='120'
                                    height='120'
                                    className='pr-6'
                                    />
                                    <div className='border-l-2 border-dark-500 pl-6'>
                                        <p className='text-3xl md:text-4xl'>{SkillData[selectedId].name}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Skills
