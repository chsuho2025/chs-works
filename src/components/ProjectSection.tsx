import { Badge } from "./Badge";
import { ListRow } from "./ListRow";
import { TableRow } from "./TableRow";

type GridItem = {
  src: string;
  title: string;
  caption: string;
};

type ProjectSectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  videoSrc?: string;
  posterSrc?: string;
  paragraphs: string[];
  meta?: [string, string][];
  badges?: string[];
  rows?: [string, string][];
  gridItems?: GridItem[];
  note?: string;
};

export function ProjectSection({
  id,
  index,
  eyebrow,
  title,
  description,
  videoSrc,
  posterSrc,
  paragraphs,
  meta,
  badges,
  rows,
  gridItems,
  note,
}: ProjectSectionProps) {
  return (
    <section className="section project-section" id={id}>
      <div className="page-shell">
        <div className="list-header">
          <span className="section-index">{index} · {eyebrow}</span>
          <h2 className="text-title-1">{title}</h2>
          <p className="text-body">{description}</p>
        </div>

        {videoSrc && (
          <div className="project-video">
            <video src={videoSrc} poster={posterSrc} controls preload="metadata" />
          </div>
        )}

        {gridItems && (
          <div className="grid-list">
            {gridItems.map((item) => (
              <article className="grid-item" key={item.src}>
                <img src={item.src} alt={`${eyebrow} ${item.title}`} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="paragraph-stack">
          {paragraphs.map((paragraph) => (
            <p className="text-body" key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {meta && (
          <div className="meta-card">
            {meta.map(([label, value]) => (
              <TableRow key={label} label={label} value={value} />
            ))}
          </div>
        )}

        {badges && (
          <div className="badge-row project-badges">
            {badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        )}

        {rows && (
          <div className="row-list">
            {rows.map(([rowTitle, rowBody]) => (
              <ListRow key={rowTitle} title={rowTitle} body={rowBody} />
            ))}
          </div>
        )}

        {note && <p className="project-note">{note}</p>}
      </div>
    </section>
  );
}
