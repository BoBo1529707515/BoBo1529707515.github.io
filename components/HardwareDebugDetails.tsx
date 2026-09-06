import Image from 'next/image';

export function HardwareDebugDetails({ src }: { src: string }) {
  if (!['/ads1299-board-photo.png', '/ads1299-pcb.jpg'].includes(src)) return null;
  return <section className="hardware-debug-details">
    <h3><span data-lang="en">Debugging the USB interface</span><span data-lang="zh">USB 接口排障记录</span></h3>
    <p data-lang="en">During board bring-up, the computer detected the CH340 interface for about one second before it disappeared. I also observed no activity on the USB data lines.</p>
    <p data-lang="zh">在电路板调试中，我发现电脑只能在插入后的约 1 秒内识别 CH340 接口，随后设备消失，USB 数据线上也未观察到活动。</p>
    <p data-lang="en">I checked the CH340 and ADuM4160 documentation against the board’s power configuration. I had initially followed a reference circuit with a 3.3 V supply on the isolated side. In this board, changing the isolation section to a 5 V supply resolved the recognition problem.</p>
    <p data-lang="zh">我对照 CH340 与 ADuM4160 的手册，检查板上的供电配置。最初我沿用了隔离侧采用 3.3 V 供电的参考电路；在这块板上，将隔离部分调整为 5 V 供电后，设备识别问题得到解决。</p>
    <figure><Image src="/usb-isolation-reference.png" width={449} height={227} alt="ADuM4160 reference circuit reproduced in the project debugging presentation" /><figcaption><span data-lang="en">Reference circuit used during the initial design, reproduced in my debugging notes from the ADuM4160 data sheet. This is not the revised circuit.</span><span data-lang="zh">初始设计参考电路，调试记录中引用自 ADuM4160 数据手册；此图不是修改后的电路。</span></figcaption></figure>
  </section>;
}

