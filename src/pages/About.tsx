import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return <div className="inner-page">
    <section className="page-hero"><div className="container"><span className="eyebrow">ABOUT GLIFFY.X</span><h1>Technology with <em>purpose.</em></h1><p>We create digital experiences and practical technology solutions for businesses ready to move forward.</p></div></section>
    <section className="section"><div className="container about-grid"><SectionTitle eyebrow="OUR APPROACH" title="Make complex things feel simple." text="Good digital work should not only look good. It should make a business clearer, faster and easier to connect with its customers."/><div className="about-panel"><div><span>01</span><h3>Clarity</h3><p>We remove unnecessary complexity and focus on what matters.</p></div><div><span>02</span><h3>Craft</h3><p>We care about the details that make an experience feel finished.</p></div><div><span>03</span><h3>Purpose</h3><p>Every visual and technical choice should serve a real goal.</p></div></div></div></section>
  </div>;
}