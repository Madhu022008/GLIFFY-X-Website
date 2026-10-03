import {
  Bot,
  Code2,
  Layout,
  ShoppingBag,
  Sparkles,
  Store,
  Utensils,
  Rocket,
  BriefcaseBusiness,
  Palette,
  Workflow,
  Search,
  PencilRuler,
  Laptop,
  Send,
} from "lucide-react";

export const services = [
  { title: "Web Design", description: "Clean, conversion-focused websites with a premium visual identity.", icon: Layout },
  { title: "Web Development", description: "Fast, responsive and scalable websites built for real business needs.", icon: Code2 },
  { title: "E-Commerce", description: "Thoughtful online stores designed to make shopping simple and effective.", icon: ShoppingBag },
  { title: "UI/UX", description: "User experiences that make products clear, useful and enjoyable to use.", icon: Palette },
  { title: "Business Software", description: "Practical digital systems that simplify everyday business operations.", icon: BriefcaseBusiness },
  { title: "AI & Automation", description: "Smart workflows and automation that reduce repetitive work and save time.", icon: Bot },
];

export const solutions = [
  { title: "Startups", description: "Launch a polished digital presence that can grow with your idea.", icon: Rocket },
  { title: "Retail", description: "Digital experiences that help retail brands connect products with customers.", icon: Store },
  { title: "Restaurants", description: "Modern digital touchpoints for menus, ordering, discovery and growth.", icon: Utensils },
  { title: "Small Businesses", description: "Simple technology that gives growing businesses a stronger digital foundation.", icon: BriefcaseBusiness },
];

export const projects = [
  { title: "Aster Commerce", category: "E-Commerce", description: "A clean storefront concept focused on product discovery and easy checkout.", type: "commerce" },
  { title: "Nexa Dashboard", category: "Business Software", description: "A focused dashboard concept for managing everyday business activity.", type: "dashboard" },
  { title: "Forma Studio", category: "Web & UI/UX", description: "A bold digital portfolio concept built around strong typography and visual rhythm.", type: "studio" },
];

export const process = [
  { number: "01", title: "Discover", description: "Understand the business, goals, users and the problem we need to solve.", icon: Search },
  { number: "02", title: "Plan", description: "Define the structure, strategy, content and technology before building.", icon: Workflow },
  { number: "03", title: "Design", description: "Shape a clear visual system and user experience that feels right.", icon: PencilRuler },
  { number: "04", title: "Develop", description: "Turn the approved direction into a responsive, reliable digital product.", icon: Laptop },
  { number: "05", title: "Launch", description: "Test, refine and launch with a focus on performance and usability.", icon: Send },
];

export const pricingPlans = [
  { name: "Starter", description: "For individuals and focused small projects.", features: ["Focused website", "Responsive design", "Essential sections", "Launch support"] },
  { name: "Business", description: "For growing businesses that need more depth.", features: ["Custom website", "Advanced sections", "UI/UX refinement", "Integration support"], featured: true },
  { name: "Custom", description: "For digital products and business systems.", features: ["Custom scope", "Software features", "Automation", "Long-term support"] },
];