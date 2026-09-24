'use client';

import { useId, useState, type ReactNode } from 'react';
import { HardwareDebugDetails } from './HardwareDebugDetails';
import { ResearchDialog } from './ResearchDialog';
import { FigureViewer } from './FigureViewer';

const hardware: Record<string, { title: string; titleZh: string; body: string; bodyZh: string }> = {
  '/ads1299-board-photo.png': { title: 'ADS1299 EEG acquisition board', titleZh: 'ADS1299 脑电采集板', body: 'I led the acquisition-board project, designed the circuit and PCB, and worked on soldering, board bring-up, and module testing. This photograph shows the prototype board.', bodyZh: '我负责采集板项目，完成电路与 PCB 设计，参与焊接、上电调试与模块测试。图中为项目实物板。' },
  '/ads1299-pcb.jpg': { title: 'EEG acquisition PCB layout', titleZh: '脑电采集板 PCB 设计', body: 'PCB layout for my ADS1299 acquisition-hardware project. The physical prototype is shown in the hardware section.', bodyZh: 'ADS1299 采集硬件项目的 PCB 设计图。硬件介绍中另有实物板照片。' },
  '/thesis-ad5933-board.jpeg': { title: 'Bioimpedance system: measurement board', titleZh: '生物阻抗系统：测量板', body: 'The AD5933 measurement board from my bachelor’s thesis supports impedance measurements at multiple frequencies. I designed the hardware and carried out bench testing.', bodyZh: '毕业设计中的 AD5933 测量板支持多频阻抗测量。我完成硬件设计与台架测试。' },
};

export function ImageDetails({ src, children, title, titleZh, body, bodyZh }: {
  src: string; children: ReactNode; title?: string; titleZh?: string; body?: string; bodyZh?: string;
}) {
  const info = hardware[src];
  const heading = title ?? info?.title ?? 'Research figure';
  const [open, setOpen] = useState(false);
  const titleId = useId();
  return <>
    <button type="button" className="image-detail-trigger" aria-label={`Open details: ${heading}`} onClick={() => setOpen(true)}>{children}<span className="image-detail-cue"><span data-lang="en">Details ↗</span><span data-lang="zh">查看详情 ↗</span></span></button>
    <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId}>
      <div className="image-detail-copy">
        <h2 id={titleId} className="image-detail-title"><span data-lang="en">{heading}</span><span data-lang="zh">{titleZh ?? info?.titleZh ?? heading}</span></h2>
        <p className="image-detail-description"><span data-lang="en">{body ?? info?.body}</span><span data-lang="zh">{bodyZh ?? info?.bodyZh}</span></p>
      </div>
      {['/ads1299-board-photo.png', '/ads1299-pcb.jpg'].includes(src) ? (
        <div className="detail-media-grid">
          <figure><FigureViewer src="/ads1299-board-photo.png" alt="ADS1299–STM32 prototype board" /><figcaption><span data-lang="en">Physical acquisition-board prototype</span><span data-lang="zh">采集板实物原型</span></figcaption></figure>
          <figure><FigureViewer src="/ads1299-pcb.jpg" alt="ADS1299–STM32 acquisition board PCB layout" /><figcaption><span data-lang="en">PCB layout of the acquisition board</span><span data-lang="zh">采集板 PCB 设计图</span></figcaption></figure>
        </div>
      ) : <FigureViewer src={src} alt={heading} />}
      <HardwareDebugDetails src={src} />
    </ResearchDialog>
  </>;
}
