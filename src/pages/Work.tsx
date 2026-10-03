import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

export default function Work() {
  const [filter,setFilter] = useState("All");
  const categories = ["All","E-Commerce","Business Software","Web & UI/UX"];
  const visible = filter === "All" ? projects : projects.filter(p=>p.category===filter);
  return <div className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">SELECTED WORK</span><h1>Work that turns ideas into <em>experiences.</em></h1><p>A curated showcase of concept projects and digital directions.</p></div></section><section className="section"><div className="container"><SectionTitle eyebrow="PROJECTS" title="A few things we've imagined."/><div className="filters">{categories.map(c=><button key={c} className={filter===c?"filter active":"filter"} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="project-grid">{visible.map((p,i)=><ProjectCard key={p.title} project={p} index={i}/>)}</div></div></section></div>;
}