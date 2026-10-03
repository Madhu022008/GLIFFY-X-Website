import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  return (
    <motion.article className="service-card" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay:index*.06}} whileHover={{y:-7}}>
      <div className="card-icon"><Icon size={21}/></div>
      <div><h3>{item.title}</h3><p>{item.description}</p></div>
      <ArrowUpRight className="card-arrow" size={20}/>
    </motion.article>
  );
}