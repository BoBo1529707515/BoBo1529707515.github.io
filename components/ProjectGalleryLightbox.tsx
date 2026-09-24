'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { ResearchDialog } from './ResearchDialog';
import { FigureViewer } from './FigureViewer';

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
    src: '/assets/robotic-mouse-skin-interaction.png',
    alt: 'A skin-covered robotic mouse interacting with a real mouse in the behavioral arena',
    width: 533,
    height: 457,
    caption: 'Pilot interaction — a skin-covered robotic mouse and a real mouse in the behavioral arena',
    captionZh: '探索性互动实验——带皮机器鼠与真实小鼠在行为场地中互动',
  },
  {
    src: '/assets/robotic-mouse-system.png',
    alt: 'Robotic mouse motor layout and programmable movement states',
    width: 1600,
    height: 900,
    caption: 'Programmable morphology and movement states for controlled social-cue experiments',
    captionZh: '用于可控社会线索实验的可编程形态与运动状态',
    wide: true,
  },
];

export function ProjectGalleryLightbox({ triggerSrc, triggerAlt, triggerCaption, triggerCaptionZh }: ProjectGalleryLightboxProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <button className="project-primary-media figure-trigger" type="button" onClick={() => setOpen(true)} aria-label="Open robotic mouse project details">
        <Image src={triggerSrc} alt={triggerAlt} width={2000} height={1200} unoptimized className="project-primary-image project-primary-image-cover" />
        <span className="interactive-media-cue interactive-media-cue-featured"><span data-lang="en">Interactive project · click to explore ↗</span><span data-lang="zh">交互式项目详情 · 点击展开 ↗</span></span>
        {triggerCaption && <span className="image-caption" data-lang="en">{triggerCaption}</span>}
        {triggerCaptionZh && <span className="image-caption" data-lang="zh">{triggerCaptionZh}</span>}
      </button>

      <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId}>
          <div className="project-detail-panel">
            <header className="project-detail-header">
              <p className="eyebrow accent"><span data-lang="en">PROJECT DETAIL</span><span data-lang="zh">项目详情</span></p>
              <h3 id={titleId}><span data-lang="en">A social robotic mouse for decomposing social cues</span><span data-lang="zh">用于拆解社交线索的社交机器鼠</span></h3>
              <p data-lang="en">The platform turns embodiment into experimentally controllable variables while preserving a naturalistic encounter between a freely moving mouse and an artificial partner.</p>
              <p data-lang="zh">该平台将具身线索转化为可实验控制的变量，同时保留真实小鼠与人工伙伴之间的自然互动情境。</p>
            </header>
            <section className="project-case-section">
              <h4><span data-lang="en">My role · March 2026–present</span><span data-lang="zh">我的工作 · 2026 年 3 月至今</span></h4>
              <p data-lang="en">I conceived the research question, initiated the cross-institutional collaboration, and lead the project under Prof. Ding Liu’s supervision. My work includes behavioral-paradigm and arena design, experiments, a sound-attenuated multi-camera and ultrasonic recording setup, and the robot’s perception, planning, and host-side control.</p>
              <p data-lang="zh">我提出研究问题、发起跨机构合作，并在刘鼎教授指导下主导项目。我负责行为范式与场地设计、实验实施、静音多相机与超声记录平台，以及机器鼠的感知、规划和上位机控制。</p>
              <p data-lang="en">The robotic platform is a collaborative effort; low-level control and PPO-based locomotion are collaborators’ contributions, not solely my work.</p>
              <p data-lang="zh">机器鼠平台由团队合作完成；底层控制与基于 PPO 的运动策略由合作方贡献，并非我独立完成。</p>
            </section>
            <section className="project-case-section">
              <h4><span data-lang="en">Current evidence · prototype &amp; pilot interaction</span><span data-lang="zh">已有证据 · 实物原型与探索性互动</span></h4>
              <p data-lang="en">The images below document the prototype and pilot interaction, not proof that artificial contact satisfies social need. The study is designed to separate social cues and test residual social need with a real-mouse reunion probe.</p>
              <p data-lang="zh">下图展示实物原型和探索性互动，并不等于已经证明人工接触满足了社交需求。研究拟拆解不同社会线索，并通过真鼠重聚检验测量剩余社交需求。</p>
              <div className="project-detail-gallery">
                {gallery.map((item) => <figure className={item.wide ? 'detail-media-wide' : ''} key={item.src}>
                  <FigureViewer src={item.src} alt={item.alt} />
                  <figcaption><span data-lang="en">{item.caption}</span><span data-lang="zh">{item.captionZh}</span></figcaption>
                </figure>)}
              </div>
            </section>
            <section className="project-case-section">
              <h4><span data-lang="en">Experimental iteration · vibration &amp; noise</span><span data-lang="zh">实验迭代 · 振动与噪声</span></h4>
              <p data-lang="en">During testing, I observed that the mice were sensitive to vibration and sound from the robot. I iterated on the control algorithms and worked with our collaborators on mechanical adjustments to reduce these confounds.</p>
              <p data-lang="zh">调试中，我观察到小鼠对机器鼠产生的振动和声音敏感。我反复调试控制算法，并与合作方调整机械结构，以降低这些混杂因素。</p>
            </section>
            <section className="project-detail-goal">
              <p className="eyebrow accent"><span data-lang="en">TOWARD A CLOSED LOOP</span><span data-lang="zh">闭环目标</span></p>
              <p data-lang="en">I am extending the platform toward a closed-loop social-neuroengineering system. The planned loop will combine MPN population activity and dopamine signals from the freely moving mouse to estimate its social state, allowing the robotic mouse to adjust its interaction strategy online.</p>
              <p data-lang="zh">下一步计划将平台扩展为闭环社会神经工程系统：结合自由活动真实小鼠的 MPN 神经群体活动与多巴胺信号估计社交状态，让机器鼠在线调整互动策略。这是计划中的闭环方案，而非已完成的验证结果。</p>
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
          </div>
      </ResearchDialog>
    </>
  );
}
