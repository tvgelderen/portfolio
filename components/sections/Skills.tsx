import { SkillData } from "../data/SkillData";

import { motion } from "framer-motion";

const Skills = () => {
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
                className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 max-w-[300px] xs:max-w-[450px] md:max-w-[600px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
            >
                {SkillData.slice(i, i + step).map((skill) => (
                    <div
                        key={skill.name}
                        className="hover:scale-110 duration-300 justify-center shadow-lg m-1 xs:m-2 text-xs sm:text-sm md:text-base aspect-square"
                    >
                        <div className="flex justify-center items-center w-full h-full rounded-t bg-light-primary/25 dark:bg-light-primary/5 backdrop-blur-md">
                            <img
                                src={skill.image}
                                className="h-[60%] w-[60%] object-contain"
                            />
                        </div>
                        <div className="flex justify-center items-center p-2 rounded-b bg-light-primary/60 dark:bg-light-primary/15 backdrop-blur-md">
                            <span style={{ fontWeight: 500 }}>
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        );
    };

    const ShowRows = (rowLen: number) => {
        let steps = [];
        for (let i = 0; i < SkillData.length; i += rowLen) {
            steps.push(i);
        }

        return (
            <div className="grid grid-cols-1 mt-4 mb-2 md:my-12">
                {steps.map((step) => (
                    <div className="flex justify-center" key={step}>{GetRow(rowLen, step)}</div>
                ))}
            </div>
        );
    };

    return (
        <div className="section">
            <div id="skills" className="skills">
                <p className="section-head">Skills</p>
                <div className="xs:hidden">{ShowRows(2)}</div>
                <div className="hidden xs:block md:hidden">{ShowRows(3)}</div>
                <div className="hidden md:block">{ShowRows(4)}</div>
            </div>
        </div>
    );
};

export default Skills;
