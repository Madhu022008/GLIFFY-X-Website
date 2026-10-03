import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.article className={`project-card ${project.type}`} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.6,delay:index*.08}}>
      <div className="project-visual">
        <div className="browser-bar"><i/><i/><i/></div>
        <div className="mockup-content"><span>{project.category}</span><strong>{project.title}</strong><div className="mock-lines"><b/><b/><b/></div></div>
      </div>
      <div className="project-copy"><div><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div><ArrowUpRight size={21}/></div>
    </motion.article>
  );
}