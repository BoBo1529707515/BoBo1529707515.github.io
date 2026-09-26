'use client';

import type { ReactNode } from 'react';
import { Dialog, DialogContent } from './ui/dialog';

export function ResearchDialog({ open, onOpenChange, titleId, className, children }: {
  open: boolean; onOpenChange: (open: boolean) => void; titleId: string;
  className?: string; children: ReactNode;
}) {
  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className={`research-dialog ${className ?? ''}`} showCloseButton={false} aria-labelledby={titleId} aria-describedby={undefined}>
      <div className="research-dialog-toolbar">
        <span data-lang="en">Project notes</span><span data-lang="zh">项目笔记</span>
        <button type="button" onClick={() => onOpenChange(false)} aria-label="Close project details">
          <span data-lang="en">Close ×</span><span data-lang="zh">关闭 ×</span>
        </button>
      </div>
      {children}
    </DialogContent>
  </Dialog>;
}
