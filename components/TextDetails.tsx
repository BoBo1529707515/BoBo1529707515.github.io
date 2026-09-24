'use client';

import { useId, useState, type ReactNode } from 'react';
import { ResearchDialog } from './ResearchDialog';

export function TextDetails({ title, titleZh, children, label = 'Research details', labelZh = '研究详情' }: {
  title: string; titleZh: string; children: ReactNode; label?: string; labelZh?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  return <>
    <button type="button" className="text-details-trigger" onClick={() => setOpen(true)} aria-label={`Open research details: ${title}`}><span data-lang="en">{label} ↗</span><span data-lang="zh">{labelZh} ↗</span></button>
    <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId}>
      <h2 id={titleId} className="image-detail-title"><span data-lang="en">{title}</span><span data-lang="zh">{titleZh}</span></h2>
      <div onClick={(event) => { if ((event.target as HTMLElement).closest('a[href^="#"]')) setOpen(false); }}>{children}</div>
    </ResearchDialog>
  </>;
}
