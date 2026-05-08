import type { ReactNode } from 'react';

export type GlassIconItem = {
  icon: ReactNode;
  label: string;
  href: string;
  caption?: string;
};

const GlassIcons = ({ items }: { items: GlassIconItem[] }) => (
  <div className="glass-icons-grid" aria-label="Social links">
    {items.map((item) => (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noreferrer"
        aria-label={item.label}
        title={item.label}
        className={`glass-icon-tile ${item.caption ? 'glass-icon-tile-with-caption' : ''}`.trim()}
      >
        <span className="glass-icon-shadow" aria-hidden="true" />
        <span className="glass-icon-surface">
          {item.icon}
          {item.caption && <span className="glass-icon-caption">{item.caption}</span>}
        </span>
      </a>
    ))}
  </div>
);

export default GlassIcons;
