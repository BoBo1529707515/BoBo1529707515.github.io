'use client';

import { useId, useState, type ReactNode } from 'react';
import { ResearchDialog } from './ResearchDialog';

export function TextDetails({ title, titleZh, children, preview, label = 'View details', labelZh = '查看详情', analyticsId = 'experimental-setup' }: {
  title: string; titleZh: string; children: ReactNode; preview?: ReactNode; label?: string; labelZh?: string; analyticsId?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  return <>
    <button type="button" className={preview ? 'collaboration-image-trigger' : 'text-details-trigger'} onClick={() => setOpen(true)} aria-label={`Open research details: ${title}`}>{preview}<span className={preview ? 'image-detail-cue' : undefined}><span data-lang="en">{label} →</span><span data-lang="zh">{labelZh} →</span></span></button>
    <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId} analyticsId={analyticsId}>
      <h2 id={titleId} className="image-detail-title"><span data-lang="en">{title}</span><span data-lang="zh">{titleZh}</span></h2>
      <div onClick={(event) => { if ((event.target as HTMLElement).closest('a[href^="#"]')) setOpen(false); }}>{children}</div>
    </ResearchDialog>
  </>;
}
