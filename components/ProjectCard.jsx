import ScrollShot from "./ScrollShot";
import savedShots from "../data/screenshots.json";

// Live full-page screenshot of any public URL (Microlink, free tier, cached).
const liveShot = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&fullPage=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitUntil=networkidle2`;

/** Order: custom image > saved local screenshot > live screenshot > placeholder */
const shotSources = ({ image, slug, url }) =>
  [image, savedShots[slug], url && liveShot(url), `/projects/${slug}.svg`].filter(Boolean);

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const host = (url) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

/** Renders a link card when the project has a url, otherwise a plain card. */
function CardShell({ url, className, children }) {
  if (!url) return <div className={`${className} no-link`}>{children}</div>;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

/** Shared card used by every project grid. variant: "featured" | "wide" | "grid" */
export default function ProjectCard({ project, variant = "grid" }) {
  const { title, subtitle, url, description, highlights, tags, tag } = project;
  const sources = shotSources(project);

  if (variant === "featured" || variant === "wide") {
    return (
      <CardShell url={url} className={`card card-featured${variant === "wide" ? " card-wide" : ""}`}>
        <ScrollShot sources={sources} alt={`${title} full page screenshot`} />
        <div className="card-body">
          <div className="card-head">
            <div>
              <h3>{title}</h3>
              <p className="card-sub">{subtitle}</p>
            </div>
            {url && <span className="card-link">Visit <Arrow /></span>}
          </div>
          <p className="card-desc">{description}</p>
          <ul className="card-list">
            {highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
          <div className="tags">
            {tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </CardShell>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="card">
      <ScrollShot sources={sources} alt={`${title} full page screenshot`} />
      <div className="card-body compact">
        <div>
          <h3>{title}</h3>
          <p className="card-sub">{tag || host(url)}</p>
        </div>
        <span className="card-icon"><Arrow /></span>
      </div>
    </a>
  );
}
