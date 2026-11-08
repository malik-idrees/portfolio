import ProjectCard from "../components/ProjectCard";
import {
  profile,
  stats,
  skills,
  experience,
  featuredProjects,
  automations,
  websites,
  funnels,
} from "../data/portfolio";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            <span className="logo-mark">IM</span>
            {profile.firstName}
          </a>
          <nav className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="glow" aria-hidden="true" />
          <div className="container hero-inner">
            <span className="pill"><span className="dot" /> Available for freelance projects</span>
            <h1>
              Hi, I'm {profile.firstName}. I build websites, funnels and{" "}
              <span className="grad">automations that connect your business.</span>
            </h1>
            <p className="lead">{profile.intro}</p>
            <div className="hero-cta">
              <a href="#work" className="btn">See my work</a>
              <a href={`mailto:${profile.email}`} className="btn btn-ghost">Get in touch</a>
            </div>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT + SKILLS */}
        <section id="about" className="section">
          <div className="container">
            <SectionHead
              eyebrow="About"
              title={profile.title}
              text={`Based in ${profile.location}. I take a business from scattered tools to one connected system: the website, the funnel, the CRM pipeline, payments and the follow-up automations behind them.`}
            />
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group} className="skill-card">
                  <h3>{s.group}</h3>
                  <div className="tags">
                    {s.items.map((i) => <span key={i} className="tag">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="container">
            <SectionHead eyebrow="Experience" title="Where I've worked" />
            <div className="timeline">
              {experience.map((e) => (
                <div key={e.company} className="tl-item">
                  <div className="tl-top">
                    <h3>{e.role} <span>@ {e.company}</span></h3>
                    <span className="tl-period">{e.period}</span>
                  </div>
                  {e.points.map((p) => <p key={p}>{p}</p>)}
                </div>
              ))}
              <div className="tl-item">
                <div className="tl-top">
                  <h3>Education</h3>
                </div>
                <p>{profile.education}</p>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section">
          <div className="container">
            <SectionHead
              eyebrow="Selected Work"
              title="Projects I've built"
              text="Hover over any project to scroll through the full page. Click to open the live site."
            />

            <div className="grid-featured">
              {featuredProjects.map((p) => (
                <ProjectCard key={p.title} project={p} variant="featured" />
              ))}
            </div>

            <h3 className="sub-head">CRM & Automation</h3>
            <p className="sub-text">Workflows and automations built inside GoHighLevel.</p>
            <div className="grid-wide">
              {automations.map((p) => (
                <ProjectCard key={p.title} project={p} variant="wide" />
              ))}
            </div>

            <h3 className="sub-head">Websites</h3>
            <p className="sub-text">All integrated with GoHighLevel for CRM, lead capture and automation.</p>
            <div className="grid">
              {websites.map((p) => <ProjectCard key={p.title} project={p} />)}
            </div>

            <h3 className="sub-head">GoHighLevel Funnels & Landing Pages</h3>
            <p className="sub-text">Conversion funnels and landing pages built inside GoHighLevel.</p>
            <div className="grid">
              {funnels.map((p) => <ProjectCard key={p.title} project={p} />)}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact">
              <span className="eyebrow">Contact</span>
              <h2>Have a project in mind? Let's build it.</h2>
              <p>Websites, GHL funnels, CRM setup or a full automation system. Send me a message and I'll get back to you quickly.</p>
              <div className="hero-cta center">
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="btn">Chat on WhatsApp</a>
                <a href={`mailto:${profile.email}`} className="btn btn-ghost">{profile.email}</a>
              </div>
              <p className="contact-meta">{profile.phone} · {profile.location}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
