import { ArrowUpRight, ContactRound, Download, GitBranch, Mail, MapPin } from "lucide-react";
import { profile, withBasePath } from "@/src/data/profile";

export function PortfolioContact() {
  return (
    <section className="portfolio-contact" id="contact" aria-labelledby="contact-title">
      <div className="portfolio-contact__inner">
        <p className="contact-kicker">Available for AI engineering, machine learning, data science, and applied AI opportunities.</p>
        <h2 id="contact-title">Let’s build intelligence<br /><span>people can inspect and trust.</span></h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail aria-hidden="true" size={17} /> Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><ContactRound aria-hidden="true" size={17} /> LinkedIn <ArrowUpRight aria-hidden="true" size={12} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" size={17} /> GitHub <ArrowUpRight aria-hidden="true" size={12} /></a>
          <a href={withBasePath(profile.resume)} download><Download aria-hidden="true" size={17} /> Resume</a>
        </div>
        <div className="contact-meta"><span><MapPin aria-hidden="true" size={14} />{profile.location}</span><span>{profile.email}</span></div>
      </div>
    </section>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <div><span className="footer-monogram">AT</span><p>Anmol Tripathi · Data Scientist & Machine Learning Engineer</p></div>
      <div><p>© {new Date().getFullYear()}</p><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
