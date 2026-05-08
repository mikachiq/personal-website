import type { ReactNode } from 'react';

export type GlassIconItem = {
  icon: ReactNode;
  label: string;
  href: string;
  caption?: string;
};

const GlassIcons = ({ items }: { items: GlassIconItem[] }) => (
  <ul className="glass-icons-grid" aria-label="Social links">
    {items.map((item) => (
      <li key={item.label} className="glass-icon-item">
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          className="glass-icon-link"
        >
          <span className="glass-icon-tooltip">{item.caption ?? item.label.replace(' profile', '')}</span>
          <span className="glass-icon-surface" aria-hidden="true">
            {item.icon}
          </span>
        </a>
      </li>
    ))}
  </ul>
);

export default GlassIcons;
