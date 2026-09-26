import { TextDetails } from './TextDetails';

export function ReGroundDetails() {
  return <TextDetails title="ReGround: experience reuse under changing authority" titleZh="ReGround：权限变化后的经验重用" label="About this project" labelZh="项目简介">
    <p data-lang="en"><strong>Yibo Yuan</strong>, Sichaon Wang, Yang Su, Ren Wang · 2026 · First-author manuscript under review at ICLR 2027.</p>
    <p data-lang="zh"><strong>袁艺博（Yibo Yuan）</strong>、Sichaon Wang、Yang Su、Ren Wang · 2026 年稿件 · 第一作者 · ICLR 2027 在审。</p>
    <p data-lang="en">In long-term collaboration, AI agents learn from people and past interactions. But learning what works does not automatically grant permission to do it. ReGround explores how agents can retain useful experience while adapting to changes in their roles and authority.</p>
    <p data-lang="zh">在长期合作中，AI 会不断从人和过去的互动中学习。但学会什么做法有效，并不意味着获得执行它的权限。ReGround 探索 AI 如何在角色与权限变化时，保留并重新运用有用经验。</p>
    <p data-lang="en">This work connects my interest in relational boundaries with the design of AI memory and planning: how can an agent keep learning without treating past success or trust as permission to act?</p>
    <p data-lang="zh">这项工作把我对关系边界的关注延伸到 AI 记忆与规划设计：如何让智能体持续学习，却不把过去的成功或信任当作行动授权？</p>
  </TextDetails>;
}
