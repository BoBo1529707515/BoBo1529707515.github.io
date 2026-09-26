import { TextDetails } from './TextDetails';

export function ReGroundDetails() {
  return <TextDetails title="ReGround: experience reuse under changing authority" titleZh="ReGround：权限变化后的经验重用" label="About this project" labelZh="项目简介">
    <p data-lang="en"><strong>Yibo Yuan</strong>, Sichaon Wang, Yang Su, Ren Wang · 2026 · First-author manuscript under review at ICLR 2027.</p>
    <p data-lang="zh"><strong>袁艺博（Yibo Yuan）</strong>、Sichaon Wang、Yang Su、Ren Wang · 2026 年稿件 · 第一作者 · ICLR 2027 在审。</p>
    <p data-lang="en">Suppose an assistant has learned how to prepare and send a report. Later, it is no longer allowed to send reports directly. It still knows how to do the analysis—but needs a different, permitted way to finish the job.</p>
    <p data-lang="zh">假设助手已经学会写报告、发报告，后来却不再被允许直接发送。它仍然知道怎么分析，但需要换一种被允许的方式完成工作。</p>
    <p data-lang="en">This is the question behind ReGround. I want AI to keep what it has learned without confusing “this worked before” with “I’m allowed to do it now.”</p>
    <p data-lang="zh">这就是 ReGround 关心的问题。我希望 AI 能保留学到的东西，但分清“以前这样做有效”和“现在我有权这样做”。</p>
  </TextDetails>;
}
