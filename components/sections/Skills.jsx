import React, { useState } from 'react'
import { SkillData } from '../data/SkillData'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useAppContext } from '../../context/AppContext'
import { skills } from '../../languages/skills'

const Skills = () => {
    const [selectedId, setSelectedId] = useState(null)

    const { language } = useAppContext()
    const content = skills[language] === undefined ? skills['en'] : skills[language]

    const GetRow = (rowLen, i) => {
            let step = (SkillData.length - i - 1)
            step = step < rowLen ? step : rowLen;

            const time = 1.6 * (i / 6 + 1 / i)

            const variants = {
                offscreen: {
                    y: 400,
                    opacity: 0,
                    scale: 0,
                },
                onscreen: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: time
                    }
                }
            }

            return (
                <motion.div
                  className='flex justify-center items-center'
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={variants}
                >
                    {SkillData.slice(i, i + step).map((skill, index) => (
                        <div 
                          key={skill.name}
                          className='bg-primary rounded-full m-4 p-4 hover:scale-125 duration-300 shadow-md shadow-black'
                          onClick={() => setSelectedId(i + index)}  
                        >
                            <img 
                              src={skill.image}
                              className='bg-cover h-[50px] w-[50px] md:h-[70px] md:w-[70px] object-contain'
                            />
                        </div>
                    ))}
                </motion.div>
            )
    }

    const ShowRows = rowLen => {
        let steps = []

        for (let i = 0; i < SkillData.length; i+=rowLen)
            steps.push(i)

        return (
            <div className='grid grid-cols-1 sm:w-[55%] w-3/4 m-auto mt-[-60px] mb-[60px]'>
                {steps.map(step => (
                    <span key={step}>
                        {GetRow(rowLen, step)}
                    </span>
                ))}
            </div>
        )
    }

    return (
        <div className="sectionStyle">
            <p className="sectionHead">{content.head}</p>
            <h3 className="sectionTitle">{content.title}</h3>

            {ShowRows(3)}

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div 
                      layoutId={selectedId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed z-[10] top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30 dark:bg-black/50"
                      onClick={() => setSelectedId(null)}
                    >
                        <div 
                          className='dark:bg-dark-700 p-6 rounded-xl' 
                          onClick={(event) => event.stopPropagation()}
                        >
                            <div className='flex justify-between items-center'>
                                <Image
                                  src={SkillData[selectedId].image}
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
    )
}

export default Skills
