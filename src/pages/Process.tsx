import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { process } from "../data/siteData";

export default function Process() {
  return <div className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">PROCESS</span><h1>A simple path from <em>idea to impact.</em></h1><p>Clear stages, visible progress and thoughtful decisions from the first conversation to launch.</p></div></section><section className="section"><div className="container"><SectionTitle eyebrow="HOW WE WORK" title="Five steps. One clear direction."/><div className="process-detail">{process.map((step,i)=>{const Icon=step.icon;return <motion.article key={step.number} initial={{opacity:0,x:i%2?30:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{duration:.6}}><span>{step.number}</span><div className="detail-icon"><Icon/></div><div><h2>{step.title}</h2><p>{step.description}</p></div></motion.article>})}</div></div></section></div>;
}