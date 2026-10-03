import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

import { services } from "../data/siteData";

export default function Home() {
    return (
        <div className="home-page">

            {/* ================= HERO ================= */}
            <section className="hero">

                <div className="hero-container">

                    {/* LEFT SIDE */}
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="hero-label">
                            IDEAS
                            <span>→</span>
                            DESIGN
                            <span>→</span>
                            IMPACT
                        </div>

                        <h1>
                            Turn Your Ideas Into
                            <br />
                            <span className="gradient-text">
                                Stunning Digital
                            </span>
                            <br />
                            Experiences.
                        </h1>

                        <p className="hero-description">
                            GLIFFY X is your creative partner for modern web design,
                            graphics, UI/UX, and digital solutions that make your brand
                            stand out in the digital world.
                        </p>

                        <div className="hero-buttons">

                            <Link
                                to="/services"
                                className="primary-button"
                            >
                                Explore Our Services
                                <span>→</span>
                            </Link>

                            <Link
                                to="/about"
                                className="story-button"
                            >
                                <span className="play-icon">▶</span>
                                Watch Our Story
                            </Link>

                        </div>

                    </motion.div>


                    {/* RIGHT SIDE */}
                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                    >

                        {/* Main Girl */}
                        <div className="creative-person">

                            <img
                                src={`${import.meta.env.BASE_URL}assets/hero.png.png`}
                                alt="GLIFFY.X Creative Designer"
                                className="hero-person-image"
                            />

                        </div>


                        {/* Code Card */}
                        <div className="floating-card code-card">

                            <div className="code-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="code-line long"></div>
                            <div className="code-line medium"></div>
                            <div className="code-line short"></div>
                            <div className="code-line medium"></div>

                        </div>


                        {/* UI/UX Card */}
                        <div className="floating-card ui-card">

                            <div className="ui-icon">▣</div>

                            <strong>UI/UX Design</strong>

                            <span>→</span>

                        </div>


                        {/* Creative Solutions */}
                        <div className="creative-card">
                            ✦

                            <span>
                                Creative
                                <br />
                                Solutions
                            </span>

                        </div>


                        {/* Tool Icons */}
                        <div className="tool-icon figma">
                            F
                        </div>

                        <div className="tool-icon photoshop">
                            Ps
                        </div>

                        <div className="tool-icon dev">
                            &lt;/&gt;
                        </div>

                    </motion.div>


                    {/* ================= SERVICE STRIP ================= */}
                    <div className="service-strip">

                        <div className="service-box">
                            <div className="service-icon">
                                ◉
                            </div>

                            <div>
                                <strong>Web Design</strong>
                                <small>Modern &amp; Responsive</small>
                            </div>
                        </div>


                        <div className="service-box">
                            <div className="service-icon pink">
                                ✎
                            </div>

                            <div>
                                <strong>Graphics Design</strong>
                                <small>Creative &amp; Impactful</small>
                            </div>
                        </div>


                        <div className="service-box">
                            <div className="service-icon blue">
                                ◈
                            </div>

                            <div>
                                <strong>UI/UX Design</strong>
                                <small>User Focused</small>
                            </div>
                        </div>


                        <div className="service-box">
                            <div className="service-icon purple">
                                ♧
                            </div>

                            <div>
                                <strong>Digital Solutions</strong>
                                <small>Scalable &amp; Future Ready</small>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ABOUT GLIFFY.X ================= */}
            <section className="section intro-section">

                <div className="container">

                    <div className="intro-card">

                        <div className="intro-badge">
                            <Sparkles size={14} />
                            ABOUT GLIFFY.X
                        </div>


                        <h2 className="intro-heading">

                            GLIFFY.X is a startup focused on creating
                            modern digital experiences with thoughtful
                            design and practical technology.

                            <span className="gradient-text">
                                Simple, creative, and meaningful.
                            </span>

                        </h2>


                        <p className="intro-text">

                            We create websites, UI/UX experiences, and
                            digital solutions that help ideas grow into
                            meaningful digital experiences.

                        </p>
                        <div className="intro-stats">
                            <div className="stat-item">
                                <strong>99.9%</strong>
                                <span>Uptime &amp; Reliability</span>
                            </div>
                            <div className="stat-item">
                                <strong>2.5x</strong>
                                <span>Faster Conversion</span>
                            </div>
                            <div className="stat-item">
                                <strong>100%</strong>
                                <span>Custom Built</span>
                            </div>
                        </div>


                    </div>

                </div>

            </section>


            {/* ================= SERVICES ================= */}
            <section
                id="services"
                className="section"
            >

                <div className="container">

                    <SectionTitle
                        eyebrow="OUR SERVICES"
                        title="What we create."
                        text="Simple, creative digital solutions designed around your ideas and business needs."
                    />


                    <div className="service-grid">

                        {services.map((item, i) => (
                            <ServiceCard
                                key={item.title}
                                item={item}
                                index={i}
                            />
                        ))}

                    </div>

                </div>

            </section>

        </div>
    );
}