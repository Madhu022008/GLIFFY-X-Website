import SectionTitle from "../components/SectionTitle";
import { solutions } from "../data/siteData";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  return <div className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">SOLUTIONS</span><h1>Built around <em>real businesses.</em></h1><p>Technology should fit the way your business works—not the other way around.</p></div></section><section className="section"><div className="container"><SectionTitle eyebrow="FOR EVERY STAGE" title="Digital solutions with context."/><div className="solution-list">{solutions.map((item,i)=>{const Icon=item.icon;return <motion.article key={item.title} className="solution-row" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}><div className="solution-row-icon"><Icon/></div><span>0{i+1}</span><div><h2>{item.title}</h2><p>{item.description}</p></div><ArrowUpRight/></motion.article>})}</div></div></section></div>;
}