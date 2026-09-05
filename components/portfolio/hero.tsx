import { ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, ContactRound, Download, GitBranch, MapPin } from "lucide-react";
import { profile, withBasePath } from "@/src/data/profile";

export function PortfolioHero() {
  return (
    <section className="portfolio-hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-status">
          <span className="hero-status__dot" />
          Quality Data Scientist at Hach Company
        </div>
        <p className="hero-kicker">Data Scientist · Machine Learning Engineer · Applied AI</p>
        <h1 id="hero-title">
          Data to models.<br />
          <span>Models to decisions.</span>
        </h1>
        <p className="hero-intro">{profile.summary}</p>
        <div className="hero-actions">
          <a className="action action--primary" href="#rag-systems">
            Explore Agentic RAG <ArrowDownRight aria-hidden="true" size={17} />
          </a>
          <a className="action action--quiet" href={withBasePath(profile.resume)} download>
            <Download aria-hidden="true" size={17} /> Resume
          </a>
        </div>
        <div className="hero-socials" aria-label="Professional profiles">
          <a href={profile.github} target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" size={15} /> GitHub <ArrowUpRight aria-hidden="true" size={12} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><ContactRound aria-hidden="true" size={15} /> LinkedIn <ArrowUpRight aria-hidden="true" size={12} /></a>
          <span><MapPin aria-hidden="true" size={15} /> {profile.location}</span>
        </div>
      </div>

      <div className="hero-portrait-column">
        <div className="portrait-card">
          <div className="portrait-card__meta"><span>ANMOL TRIPATHI</span><span>AI / ML / DATA</span></div>
          <picture>
            <source srcSet={withBasePath(profile.portrait)} type="image/webp" />
            <img src={withBasePath(profile.portraitFallback)} alt="Anmol Tripathi in professional attire" width={900} height={1600} decoding="async" fetchPriority="high" />
          </picture>
          <div className="portrait-card__role"><BriefcaseBusiness aria-hidden="true" size={15} /><span>Industry AI + research ML</span></div>
        </div>
        <div className="hero-signal-card">
          <div className="hero-signal-card__copy">
            <span>End-to-end delivery</span>
            <strong>Data → models → systems → working decisions</strong>
            <p>Built with evidence, evaluation, and clear handoffs.</p>
          </div>
          <div className="hero-signal-card__flow" aria-label="Data to models to systems to decisions">
            {['Data', 'Models', 'Systems', 'Decisions'].map((item, index) => (
              <div key={item}><span>{item}</span>{index < 3 && <ArrowRight aria-hidden="true" size={12} />}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-evidence" aria-label="Portfolio evidence">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
