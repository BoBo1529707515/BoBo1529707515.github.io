'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ProjectGalleryLightboxProps = {
  triggerSrc: string;
  triggerAlt: string;
  triggerCaption?: string;
  triggerCaptionZh?: string;
};

const gallery = [
  {
    src: '/assets/robotic-mouse-prototype.png',
    alt: 'Physical prototype of the biomimetic robotic mouse',
    width: 2000,
    height: 1200,
    caption: 'Physical prototype — programmable biomimetic embodiment',
    captionZh: '机器鼠实物原型——可编程仿生具身平台',
  },
  {
    src: '/assets/robotic-mouse-pilot-interaction.png',
    alt: 'A freely moving mouse investigating the robotic mouse in an experimental arena',
    width: 352,
    height: 337,
    caption: 'Pilot interaction session — a freely moving mouse investigates the robotic mouse within the experimental arena',
    captionZh: '探索性互动实验——真实小鼠在实验场地中自主探索机器鼠',
    compact: true,
  },
  {
    src: '/assets/robotic-mouse-system.png',
    alt: 'Robotic mouse motor layout and programmable movement states',
    width: 1600,
    height: 900,
    caption: 'Programmable morphology and movement states for controlled social-cue experiments',
    captionZh: '用于可控社会线索实验的可编程形态与运动状态',
  },
];

export function ProjectGalleryLightbox({ triggerSrc, triggerAlt, triggerCaption, triggerCaptionZh }: ProjectGalleryLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button className="project-primary-media figure-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open robotic mouse project details">
        <Image src={triggerSrc} alt={triggerAlt} width={2000} height={1200} unoptimized className="project-primary-image project-primary-image-cover" />
        {triggerCaption && <span className="image-caption" data-lang="en">{triggerCaption}</span>}
        {triggerCaptionZh && <span className="image-caption" data-lang="zh">{triggerCaptionZh}</span>}
      </button>

      {open && (
        <div className="project-detail-lightbox" role="dialog" aria-modal="true" aria-labelledby="robotic-mouse-detail-title" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setOpen(false);
        }}>
          <div className="project-detail-panel">
            <button className="figure-lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="Close project details"><span data-lang="en">Close ×</span><span data-lang="zh">关闭 ×</span></button>
            <header className="project-detail-header">
              <p className="eyebrow accent"><span data-lang="en">PROJECT DETAIL</span><span data-lang="zh">项目详情</span></p>
              <h3 id="robotic-mouse-detail-title"><span data-lang="en">A social robotic mouse for decomposing social cues</span><span data-lang="zh">用于拆解社交线索的社交机器鼠</span></h3>
              <p data-lang="en">The platform turns embodiment into experimentally controllable variables while preserving a naturalistic encounter between a freely moving mouse and an artificial partner.</p>
              <p data-lang="zh">该平台将具身线索转化为可实验控制的变量，同时保留真实小鼠与人工伙伴之间的自然互动情境。</p>
            </header>
            <section className="project-detail-goal">
              <p className="eyebrow accent"><span data-lang="en">TOWARD A CLOSED LOOP</span><span data-lang="zh">闭环目标</span></p>
              <p data-lang="en">I am extending the platform toward a closed-loop social-neuroengineering system. The planned loop will combine MPN population activity and dopamine signals from the freely moving mouse to estimate its social state, allowing the robotic mouse to adjust its interaction strategy online.</p>
              <p data-lang="zh">我正在将这一平台扩展为闭环社会神经工程系统：读取自由活动真实小鼠的 MPN 神经群体活动与多巴胺信号，估计其当前社交状态，并让机器鼠在线调整互动策略。</p>
              <figure className="project-detail-planned-recording">
                <a href="/assets/planned-mpn-miniscope-configuration.png" target="_blank" rel="noreferrer">
                  <Image
                    src="/assets/planned-mpn-miniscope-configuration.png"
                    alt="Planned miniscope configuration for recording MPN calcium activity in freely moving mice"
                    width={483}
                    height={452}
                    unoptimized
                  />
                </a>
                <figcaption>
                  <span data-lang="en"><strong>Planned recording configuration.</strong> A GRIN-lens miniscope will provide MPN calcium signals for estimating social state in the future closed-loop system.</span>
                  <span data-lang="zh"><strong>计划中的记录方案。</strong>后续将使用 GRIN 透镜与微型显微镜记录 MPN 钙信号，为闭环系统估计真实小鼠的社交状态。</span>
                </figcaption>
              </figure>
            </section>
            <section className="project-detail-goal">
              <h4><span data-lang="en">Reducing vibration and noise</span><span data-lang="zh">振动与噪声的迭代改进</span></h4>
              <p data-lang="en">During testing, I observed that the mice were sensitive to vibration and sound from the robot. This prompted repeated adjustments to the control algorithms and, together with our collaborators, the robot’s mechanical structure to reduce noise and vibration.</p>
              <p data-lang="zh">在实验调试中，我观察到小鼠对机器鼠产生的振动和声音敏感。因此，我反复参与控制算法的调试，并与合作方多次调整机器鼠的机械结构，以降低噪声与振动。</p>
            </section>
            <div className="project-detail-gallery">
              {gallery.map((item) => (
                <figure className={item.compact ? 'is-compact' : ''} key={item.src}>
                  <a href={item.src} target="_blank" rel="noreferrer">
                    <Image src={item.src} alt={item.alt} width={item.width} height={item.height} unoptimized />
                  </a>
                  <figcaption><span data-lang="en">{item.caption}</span><span data-lang="zh">{item.captionZh}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
