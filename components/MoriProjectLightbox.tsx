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
        <p data-lang="en">MORI distinguishes six forms of relational power: retention, forgetting, sharing, interpretation, advice, and conflict intervention. The family network illustrates how an AI companion can become a relational hub across members.</p>
        <p data-lang="zh">MORI 区分保留、遗忘、分享、解释、建议与冲突介入六类关系权力。家庭关系网络展示 AI 陪伴者如何成为连接不同成员的关系枢纽。</p>
      </div>
      <section className="project-case-section">
        <h4><span data-lang="en">Research framework</span><span data-lang="zh">研究框架</span></h4>
        <FigureViewer src={src} alt={alt} />
      </section>
      <section className="project-case-section">
        <h4><span data-lang="en">Study design</span><span data-lang="zh">实验流程</span></h4>
        <p data-lang="en">Participants judge AI powers in a fictional narrative spanning 20 years of family life. The narrative provides an experimental context, rather than a 20-year longitudinal follow-up.</p>
        <p data-lang="zh">参与者在跨越 20 年家庭生活的虚构叙事中判断 AI 权力。这是实验中的叙事情境，并非对参与者进行 20 年的纵向追踪。</p>
        <FigureViewer src="/assets/mori-study-design.png" alt="MORI study design across a fictional 20-year family narrative" />
      </section>
    </ResearchDialog>
  </>;
}
