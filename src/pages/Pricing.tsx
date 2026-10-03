import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { pricingPlans } from "../data/siteData";

export default function Pricing() {
  return <div className="inner-page"><section className="page-hero"><div className="container"><span className="eyebrow">PRICING</span><h1>Choose a starting point. <em>Build from there.</em></h1><p>Every project is different. These packages provide a simple starting framework.</p></div></section><section className="section"><div className="container"><SectionTitle eyebrow="PACKAGES" title="Simple, transparent direction."/><div className="pricing-grid">{pricingPlans.map(plan=><article key={plan.name} className={plan.featured?"pricing-card featured":"pricing-card"}>{plan.featured&&<span className="popular">MOST FLEXIBLE</span>}<h2>{plan.name}</h2><p>{plan.description}</p><div className="price">Let's discuss</div><ul>{plan.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul><Link to="/contact" className={plan.featured?"button primary":"button secondary"}>Start a Conversation <ArrowUpRight size={17}/></Link></article>)}</div></div></section></div>;
}