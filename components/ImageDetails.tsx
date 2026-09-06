'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { HardwareDebugDetails } from './HardwareDebugDetails';
import { Dialog } from '@base-ui/react/dialog';

const hardware: Record<string, { title: string; titleZh: string; body: string; bodyZh: string }> = {
  '/ads1299-board-photo.png': { title: 'ADS1299 EEG acquisition board', titleZh: 'ADS1299 脑电采集板', body: 'I led the acquisition-board project, designed the circuit and PCB, and worked on soldering, board bring-up, and module testing. This photograph shows the prototype board.', bodyZh: '我负责采集板项目，完成电路与 PCB 设计，参与焊接、上电调试与模块测试。图中为项目实物板。' },
  '/ads1299-pcb.jpg': { title: 'EEG acquisition PCB layout', titleZh: '脑电采集板 PCB 设计', body: 'PCB layout for my ADS1299 acquisition-hardware project. The physical prototype is shown in the hardware section.', bodyZh: 'ADS1299 采集硬件项目的 PCB 设计图。硬件介绍中另有实物板照片。' },
  '/thesis-stm32-board.jpeg': { title: 'Bioimpedance system: control board', titleZh: '生物阻抗系统：主控板', body: 'For my bachelor’s thesis, I developed a portable bioimpedance system. This STM32 board controls the measurement procedure, parameter settings, and display.', bodyZh: '我在毕业设计中开发便携式生物阻抗测量系统。这块 STM32 主控板负责测量流程、参数配置与显示控制。' },
  '/thesis-ad5933-board.jpeg': { title: 'Bioimpedance system: measurement board', titleZh: '生物阻抗系统：测量板', body: 'The AD5933 measurement board from my bachelor’s thesis supports impedance measurements at multiple frequencies. I designed the hardware and carried out bench testing.', bodyZh: '毕业设计中的 AD5933 测量板支持多频阻抗测量。我完成硬件设计与台架测试。' },
};

export function ImageDetails({ src, children, title, titleZh, body, bodyZh }: {
  src: string; children: ReactNode; title?: string; titleZh?: string; body?: string; bodyZh?: string;
}) {
  const info = hardware[src];
  const heading = title ?? info?.title ?? 'Research figure';
  return <Dialog.Root>
    <Dialog.Trigger className="image-detail-trigger" aria-label={`Open details: ${heading}`}>{children}</Dialog.Trigger>
    <Dialog.Portal><Dialog.Backdrop className="image-detail-backdrop" /><Dialog.Popup className="image-detail-panel" data-slot="dialog-content">
      <Dialog.Close className="image-detail-close"><span data-lang="en">Close ×</span><span data-lang="zh">关闭 ×</span></Dialog.Close>
      <div className="image-detail-visual"><Image src={src} width={2000} height={1400} alt={heading} /></div>
      <div className="image-detail-copy">
        <Dialog.Title className="image-detail-title"><span data-lang="en">{heading}</span><span data-lang="zh">{titleZh ?? info?.titleZh ?? heading}</span></Dialog.Title>
        <Dialog.Description className="image-detail-description"><span data-lang="en">{body ?? info?.body}</span><span data-lang="zh">{bodyZh ?? info?.bodyZh}</span></Dialog.Description>
      </div>
      <HardwareDebugDetails src={src} />
    </Dialog.Popup></Dialog.Portal>
  </Dialog.Root>;
}
