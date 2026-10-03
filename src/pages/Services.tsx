import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteData";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  return <div className="inner-page"><section className="page-hero">
    <div className="container"><span className="eyebrow">SERVICES</span>
      <h1>Everything you need to <em>build better.</em></h1>
      <p>Design, development and intelligent technology under one roof.</p>
    </div></section><section className="section">
      <div className="container"><SectionTitle eyebrow="CAPABILITIES" title="What we can build for you." />
        <div className="service-grid">{services.map((item, i) => <ServiceCard key={item.title} item={item} index={i} />)}
        </div></div></section>
    <section className="cta-strip">
      <div>
        <span className="cta-label">LET'S CREATE</span>

        <h2>Have a project in mind?</h2>

        <p>
          Tell us what you have in mind and let's turn your idea
          into a meaningful digital experience.
        </p>
      </div>

      <Link to="/contact" className="button primary">
        Start a Project
        <ArrowUpRight size={18} />
      </Link>
    </section>
  </div>
}