'use client';

import { useEffect } from 'react';
import type { PortfolioSection } from '../app/PortfolioPage';

const pages = [
  { id: 'research', href: '/', en: 'Research', zh: '代表研究' },
  { id: 'talks', href: '/talks/', en: 'Talks', zh: '研究分享' },
  { id: 'tools', href: '/tools/', en: 'Lab & tools', zh: '实验与工具' },
  { id: 'experience', href: '/experience/', en: 'Experience', zh: '合作与经历' },
  { id: 'publications', href: '/publications/', en: 'Publications', zh: '论文发表' },
  { id: 'future', href: '/future/', en: 'Future plans', zh: '未来计划' },
];

export function SiteNavigation({ current }: { current: PortfolioSection }) {
  return <nav className="page-nav" aria-label="Primary navigation">{pages.map(page => <a key={page.id} href={page.href} aria-current={page.id === current ? 'page' : undefined}><span data-lang="en">{page.en}</span><span data-lang="zh">{page.zh}</span></a>)}</nav>;
}

// Preserve links already sent to collaborators before the multi-page redesign.
export function LegacySectionLinks() {
  useEffect(() => {
    const routes: Record<string, string> = { neuroengineering: '/tools/', tools: '/tools/', 'circuit-explorer': '/tools/', publication: '/publications/', collaborations: '/experience/', experience: '/experience/', 'future-plans': '/future/', talks: '/talks/' };
    const redirect = () => {
      if (location.pathname !== '/') return;
      const route = routes[location.hash.slice(1)];
      if (route) location.replace(route + location.search + location.hash);
    };
    redirect();
    window.addEventListener('hashchange', redirect);
    return () => window.removeEventListener('hashchange', redirect);
  }, []);
  return null;
}
