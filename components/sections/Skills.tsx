import Image from "next/image";
import { SkillData } from "../../lib/SkillData";
import { motion } from "motion/react";

const Skills = () => {
    const GetRow = (rowLen: number, i: number) => {
        let step = SkillData.length - i;
        step = step < rowLen ? step : rowLen;

        return (
            <motion.div
                className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 max-w-[300px] xs:max-w-[450px] md:max-w-[600px] gap-2 mb-2 sm:gap-4 sm:mb-4"
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: (i / 3) * 0.2,
                    }
                }}
                viewport={{ once: true }}
            >
                {SkillData.slice(i, i + step).map((skill) => (
                    <motion.div
                        key={skill.name}
                        className="flex flex-col items-center justify-center rounded shadow-lg pb-2 text-xs sm:text-sm md:text-base aspect-square bg-light-primary dark:bg-dark-primary"
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className="flex justify-center items-center w-full h-full">
                            <Image
                                src={skill.image}
                                alt={skill.name}
                                width={150}
                                height={150}
                                className="h-[60%] w-[60%] object-contain"
                            />
                        </div>
                        <span style={{ fontWeight: 500 }}>{skill.name}</span>
                    </motion.div>
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
                    <div className="flex justify-center" key={step}>
                        {GetRow(rowLen, step)}
                    </div>
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
