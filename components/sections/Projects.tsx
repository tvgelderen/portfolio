import { motion } from "motion/react";
import { ProjectData } from "../../lib/ProjectData";
import ProjectCard from "../ProjectCard";

const Projects = () => {
    return (
        <div className="section">
            <div id="projects" className="projects">
                <p className="section-head">Projects</p>
                <div className="lg:w-full md:w-[65%] sm:w-[75%] w-[95%] m-auto pt-4">
                    {ProjectData?.map((project, index) => (
                        <motion.div key={index} layoutId={project.id}>
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
