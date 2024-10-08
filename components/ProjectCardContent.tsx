import React from "react";
import { BsEye, BsGithub } from "react-icons/bs";
import { SkillData } from "./data/SkillData";

type Props = {
    project: any;
};

const ProjectCardContent = ({ project }: Props) => {
    return (
        <>
            <div className="w-[75%] m-auto flex justify-evenly items-center lg:pt-4 pb-4">
                {project.skills.map((projectSkill: any) => {
                    const skill = SkillData.find((s) => s.name == projectSkill);

                    if (skill) {
                        return (
                            <div
                                key={skill.name}
                                className="flex flex-col justify-center items-center"
                            >
                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                    className="w-7"
                                />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="p-4 text-[0.9rem] dark:text-dark-text">
                {project.description}
            </div>
            <div className="px-4 pb-4 flex">
                <a
                    target="_blank"
                    href={project.liveURL}
                    className="button px-2 py-1 md:px-[12px] md:py-[6px] mr-4"
                    onClick={(event) => event.stopPropagation()}
                >
                    <span className="background">
                        <span className="content">
                            <BsEye className="h-5 w-4 mr-1" />
                            <span>&nbsp;Live Demo</span>
                        </span>
                    </span>
                    <BsEye className="h-5 w-4 mr-1" />
                    <span>&nbsp;Live Demo</span>
                </a>
                <a
                    target="_blank"
                    href={project.githubURL}
                    className="button-secondary"
                    onClick={(event) => event.stopPropagation()}
                >
                    <span className="background">
                        <span className="content">
                            <BsGithub className="h-5 w-4 mr-1" />
                            <span>&nbsp;Code</span>
                        </span>
                    </span>
                    <BsGithub className="h-5 w-4 mr-1" />
                    <span>&nbsp;Code</span>
                </a>
            </div>
        </>
    );
};

export default ProjectCardContent;
