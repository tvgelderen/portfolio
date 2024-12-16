"use client";

import { motion } from "motion/react";
import ProjectCardContent from "./ProjectCardContent";
import Image from "next/image";

type Props = {
    project: any;
    index: number;
};

const imgVariants = {
    hidden: (custom: { isEven: boolean }) => ({
        x: custom.isEven ? -240 : 240,
        opacity: 0,
    }),
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1,
            delay: 0.1
        },
    },
};

const ProjectCard = ({ project, index }: Props) => {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`${isEven ? "card-even" : "card-uneven"} shadow-xl lg:shadow-none rounded-md`}
        >
            {/* Card for screens md and smaller */}
            <Image
                src={project.images[0]}
                alt={project.name}
                width={640}
                height={360}
                className={`lg:hidden rounded-t object-cover object-left-top lg:card-img ${isEven
                    ? "sm-card-img-even"
                    : "sm-card-img-uneven lg:card-img-uneven"
                    }`}
                loading="lazy"
            />
            <div
                className={`${isEven
                    ? "sm-card-description-even"
                    : "sm-card-description-uneven"
                    }`}
            >
                <ProjectCardContent project={project} />
            </div>

            {/* Card for larger screens */}
            <motion.div
                className={`hidden lg:block rounded object-cover object-left-top lg:w-[60%] ${isEven ? "lg:card-img" : "lg:card-img lg:card-img-uneven"
                    }`}
                custom={{ isEven }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imgVariants}
            >
                <Image
                    className="rounded"
                    src={project.images[0]}
                    alt={project.name}
                    width={854}
                    height={480}
                    loading="lazy"
                />
            </motion.div>
            <div
                className={`hidden lg:block ${isEven ? "card-description-even" : "card-description-uneven"
                    }`}
            >
                <ProjectCardContent project={project} />
            </div>
        </div>
    );
};

export default ProjectCard;
