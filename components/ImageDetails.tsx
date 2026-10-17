'use client';

import { useId, useState, type ReactNode } from 'react';
import { HardwareDebugDetails } from './HardwareDebugDetails';
import { ResearchDialog } from './ResearchDialog';
import { FigureViewer } from './FigureViewer';

const hardware: Record<string, { title: string; titleZh: string; body: string; bodyZh: string }> = {
  '/ads1299-board-photo.png': { title: 'ADS1299 portable eight-channel EEG recorder · 2024–2025', titleZh: 'ADS1299 便携式八通道脑电采集器 · 2024—2025', body: 'I led hardware development of this portable eight-channel EEG recorder for the National College Student Biomedical Engineering Innovation Design Competition. I designed the circuit and PCB and worked on soldering, board bring-up, and module testing. This photograph shows the prototype board.', bodyZh: '我主导全国大学生生物医学工程创新设计竞赛项目中这款便携式八通道脑电采集器的硬件开发，完成电路与 PCB 设计，并参与焊接、上电调试与模块测试。图中为项目实物板。' },
  '/ads1299-pcb.jpg': { title: 'EEG acquisition PCB layout', titleZh: '脑电采集板 PCB 设计', body: 'PCB layout for my ADS1299 acquisition-hardware project. The physical prototype is shown in the hardware section.', bodyZh: 'ADS1299 采集硬件项目的 PCB 设计图。硬件介绍中另有实物板照片。' },
  '/thesis-ad5933-board.jpeg': { title: 'AD5933 bioimpedance measurement prototype · 2025', titleZh: 'AD5933 生物电阻抗测量原型 · 2025', body: 'In 2025, we collaborated with a hospital to develop an instrument for bedside assessment of lymphedema using bioelectrical impedance measurements. Supervised by Profs. Xiang Chen and Jin Li, I developed the portable STM32–AD5933 hardware and carried out bench testing for my bachelor’s thesis. The board supports measurements at multiple frequencies.', bodyZh: '2025 年，我们与医院合作，研发面向淋巴水肿床旁测量的仪器，采用生物电阻抗测量方案。在陈翔教授和李津教授指导下，我在毕业设计中完成便携式 STM32–AD5933 系统的硬件开发与台架测试。该测量板支持多频阻抗测量。' },
};

export function ImageDetails({ src, children, title, titleZh, body, bodyZh }: {
  src: string; children: ReactNode; title?: string; titleZh?: string; body?: string; bodyZh?: string;
}) {
  const info = hardware[src];
  const heading = title ?? info?.title ?? 'Research figure';
  const [open, setOpen] = useState(false);
  const titleId = useId();
  return <>
    <button type="button" className="image-detail-trigger" aria-label={`Open details: ${heading}`} onClick={() => setOpen(true)}>{children}<span className="image-detail-cue"><span data-lang="en">View details →</span><span data-lang="zh">查看详情 →</span></span></button>
    <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId} analyticsId={src.includes('ads1299') ? 'ads1299' : src.includes('ad5933') ? 'ad5933' : 'image'}>
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
