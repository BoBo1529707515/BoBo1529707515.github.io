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
    caption: 'Our robotic-mouse prototype',
    captionZh: '我们搭建的机器鼠原型',
  },
  {
    src: '/assets/robotic-mouse-skin-interaction.png',
    alt: 'A skin-covered robotic mouse interacting with a real mouse in the behavioral arena',
    width: 533,
    height: 457,
    caption: 'A real mouse meets the skin-covered robot in a pilot experiment',
    captionZh: '探索性实验中，真鼠与带皮机器鼠相遇',
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
        <span className="interactive-media-cue interactive-media-cue-featured"><span data-lang="en">More about the project ↗</span><span data-lang="zh">看看机器鼠是怎么做的 ↗</span></span>
        {triggerCaption && <span className="image-caption" data-lang="en">{triggerCaption}</span>}
        {triggerCaptionZh && <span className="image-caption" data-lang="zh">{triggerCaptionZh}</span>}
      </button>

      <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId}>
          <div className="project-detail-panel">
            <header className="project-detail-header">
              <p className="eyebrow accent"><span data-lang="en">PROJECT DETAIL</span><span data-lang="zh">项目详情</span></p>
              <h3 id={titleId}><span data-lang="en">Building a robotic social partner for mice</span><span data-lang="zh">给小鼠做一个机器伙伴</span></h3>
              <p data-lang="en">What matters to a mouse when it meets another mouse: movement, touch, smell, or being responded to? A robot lets us vary these cues while the real mouse moves freely.</p>
              <p data-lang="zh">一只小鼠遇到另一只小鼠时，在意的是动作、触碰、气味，还是对方的回应？我希望借助机器鼠，在真鼠自由活动时，分别改变这些线索。</p>
            </header>
            <section className="project-case-section">
              <p data-lang="en">I proposed the project and brought the collaborators together. Under Prof. Ding Liu’s supervision, I design and run the behavioral experiments, build the arena and multi-camera/ultrasonic recording setup, and work on the robot’s perception, planning, and host-side control.</p>
              <p data-lang="zh">这个课题是我提出的，合作者也是我联系起来的。在刘鼎教授指导下，我设计并开展行为实验，搭建场地、多相机与超声记录装置，也负责机器鼠的感知、规划和上位机控制。</p>
              <p data-lang="en">Our collaborators develop the low-level control and PPO-based locomotion. We work together to make the robot suitable for these experiments.</p>
              <p data-lang="zh">合作方负责底层控制与基于 PPO 的运动策略，我们一起把机器鼠调整到适合实验的状态。</p>
            </section>
            <section className="project-case-section">
              <p data-lang="en">Here are the prototype and our pilot interactions. To test whether the robot changes social need, we plan to let the mouse meet a real partner afterward and measure its response.</p>
              <p data-lang="zh">下面是原型和探索性互动的照片。接下来，我们计划让接触过机器鼠的小鼠再与真鼠重聚，观察它的反应，检验社交需求是否发生变化。</p>
              <div className="project-detail-gallery">
                {gallery.map((item) => <figure className={item.wide ? 'detail-media-wide' : ''} key={item.src}>
                  <FigureViewer src={item.src} alt={item.alt} />
                  <figcaption><span data-lang="en">{item.caption}</span><span data-lang="zh">{item.captionZh}</span></figcaption>
                </figure>)}
              </div>
            </section>
            <section className="project-case-section">
              <h4><span data-lang="en">Making the robot quieter</span><span data-lang="zh">先让机器鼠安静下来</span></h4>
              <p data-lang="en">During testing, I noticed that the mice reacted to the robot’s vibration and noise. I kept adjusting the control algorithms and worked with our collaborators on the mechanics, so these cues would interfere less with the experiment.</p>
              <p data-lang="zh">调试时，我发现小鼠会对机器鼠的振动和声音产生反应。于是我反复调整控制算法，也和合作方一起改机械结构，尽量减少这些干扰。</p>
            </section>
            <section className="project-case-section robot-imaging-evidence">
              <h4><span data-lang="en">September 15 — my first view of hypothalamic neurons!</span><span data-lang="zh">9 月 15 日，我点亮了第一群下丘脑神经元！</span></h4>
              <p data-lang="en">My first two-photon calcium-imaging view of a group of hypothalamic neurons, in the MPN. This is part of the robotic-mouse project.</p>
              <p data-lang="zh">这是我第一次通过双光子钙成像看到的一群下丘脑 MPN 神经元，也是机器鼠课题中的一步。</p>
              <FigureViewer src="/assets/mpn-two-photon-calcium-imaging.png" alt="MPN two-photon calcium imaging field of view" />
            </section>
            <section className="project-detail-goal">
              <p className="eyebrow accent"><span data-lang="en">TOWARD A CLOSED LOOP</span><span data-lang="zh">闭环目标</span></p>
              <p data-lang="en">Next, I want the robot to respond to the mouse’s neural activity, not just its movement. I plan to use MPN activity and dopamine signals to estimate social state and adjust the interaction as it happens.</p>
              <p data-lang="zh">下一步，我希望机器鼠不只回应小鼠的动作，还能依据它的神经活动调整互动。我计划结合 MPN 活动与多巴胺信号估计社交状态，再让这些信号参与机器鼠的控制。</p>
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
