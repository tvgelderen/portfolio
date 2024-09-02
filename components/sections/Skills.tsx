import React, { useState } from "react";
import { SkillData } from "../data/SkillData";

import { motion } from "framer-motion";

type Props = {
    content: any;
};

const Skills = ({ content }: Props) => {
    const GetRow = (rowLen: number, i: number) => {
        let step = SkillData.length - i;
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
                    delay: (i / 3) * 0.2,
                },
            },
        };

        return (
            <motion.div
                className="flex justify-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
            >
                {SkillData.slice(i, i + step).map((skill) => (
                    <div
                        key={skill.name}
                        className="m-4 hover:scale-110 duration-300 justify-center shadow-lg"
                    >
                        <div className="p-6 rounded-t bg-light-primary dark:bg-dark-primary">
                            <img
                                src={skill.image}
                                className="h-[65px] w-[65px] sm:h-[80px] sm:w-[80px] object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center p-2 rounded-b bg-light-secondary dark:bg-dark-secondary">
                            <p className="lg:text-lg" style={{ fontWeight: 500 }}>
                                {skill.name}
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        );
    };

    const ShowRows = (rowLen: number) => {
        let steps = [];

        for (let i = 0; i < SkillData.length; i += rowLen) steps.push(i);

        return (
            <div className="grid grid-cols-1 mt-4 mb-2 md:my-12">
                {steps.map((step) => (
                    <span key={step}>{GetRow(rowLen, step)}</span>
                ))}
            </div>
        );
    };

    return (
        <div className="section-uneven">
            <div id="skills" className="skills">
                <p className="section-head">{content.head}</p>

                <div className="md:hidden">{ShowRows(3)}</div>
                <div className="hidden md:block">{ShowRows(4)}</div>
            </div>
        </div>
    );
};

export default Skills;
