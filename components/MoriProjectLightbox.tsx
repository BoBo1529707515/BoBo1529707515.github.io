'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { FigureViewer } from './FigureViewer';
import { ResearchDialog } from './ResearchDialog';

export function MoriProjectLightbox({ src, alt, caption, captionZh }: {
  src: string; alt: string; caption?: string; captionZh?: string;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return <>
    <button className="project-primary-media figure-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open MORI project figures">
      <Image src={src} alt={alt} width={4320} height={1452} unoptimized className="project-primary-image project-primary-image-contain" />
      <span className="interactive-media-cue"><span data-lang="en">Click to explore the framework &amp; study design ↗</span><span data-lang="zh">点击查看研究框架与实验流程 ↗</span></span>
      <span className="image-caption" data-lang="en">{caption}</span>
      <span className="image-caption" data-lang="zh">{captionZh}</span>
    </button>
    <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId}>
      <div className="image-detail-copy">
        <h2 id={titleId} className="image-detail-title"><span data-lang="en">MORI: relational power in human–AI companionship</span><span data-lang="zh">MORI：人机陪伴中的关系权力</span></h2>
        <p data-lang="en">I separated the question “How much power should AI have?” into six decisions: what it may keep, forget, share, interpret, advise on, and intervene in. The family story lets us ask how these decisions change when the AI knows several people, not just one user.</p>
        <p data-lang="zh">我把“AI 应该有多大权力”拆成六件事：它可以保留、遗忘、分享、解释什么，可以给什么建议，又可以介入什么冲突。借助家庭故事，我们还能问：当 AI 认识的不只是一个用户，而是家里的好几个人，这些判断会怎么变？</p>
      </div>
      <section className="project-case-section">
        <h4><span data-lang="en">Research framework</span><span data-lang="zh">研究框架</span></h4>
        <FigureViewer src={src} alt={alt} />
      </section>
      <section className="project-case-section">
        <h4><span data-lang="en">Study design</span><span data-lang="zh">实验流程</span></h4>
        <p data-lang="en">Participants read a fictional story spanning 20 years of family life and revisit their decisions as the story unfolds. The 20 years belong to the story, not the length of the study.</p>
        <p data-lang="zh">参与者阅读一个跨越 20 年家庭生活的虚构故事，并随着故事推进，重新判断 AI 可以做什么。这里的 20 年是故事时间，不是实验持续时间。</p>
        <FigureViewer src="/assets/mori-study-design.png" alt="MORI study design across a fictional 20-year family narrative" />
      </section>
    </ResearchDialog>
  </>;
}
