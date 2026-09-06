const plans = [
  { title: 'Optical and electrical recording and stimulation', titleZh: '光电记录与刺激',
    body: 'I am planning a collaboration with an associate research fellow in Lan Li’s lab at Westlake University to combine transparent optoelectrodes with a miniscope. We aim to integrate optical and electrical stimulation and recording to study hypothalamic activity.',
    bodyZh: '我计划与西湖大学李兰实验室的副研究员共同推进透明光电极与 miniscope 联用，整合光电刺激与记录，用于研究下丘脑神经活动。' },
  { title: 'Closed-loop intervention with a robotic mouse', titleZh: '机器鼠闭环神经干预',
    body: 'I am developing a closed-loop neuromodulation system. I plan to use MPN population activity and dopamine signals to adjust the robot’s social interactions, then investigate whether this approach can improve social behavior in animal models of social dysfunction.',
    bodyZh: '我正在开发闭环神经调控系统，计划依据 MPN 神经群体活动与多巴胺信号调整机器鼠的社交行为，进一步在社交障碍动物模型中检验干预效果，探索治疗可能。' },
  { title: 'Loneliness and choices about AI companionship', titleZh: '孤独与 AI 陪伴中的决策',
    body: 'I am working with rednote to develop follow-up studies to MORI. Using decision-making paradigms, I plan to examine how loneliness affects choices between human and AI interaction, and which aspects of human social contact AI companionship may substitute for.',
    bodyZh: '我正在与小红书合作推进 MORI 后续研究，计划采用决策范式，研究孤独如何影响人们在人际交往与 AI 陪伴之间的选择，以及 AI 能够替代人类社交的哪些部分。' },
  { title: 'Memory and authority in long-term, multi-user AI interaction', titleZh: '长期、多人 AI 交互中的记忆与权限',
    body: 'I plan to extend MORI’s algorithmic work to long-term interactions involving multiple users. I will study how separating rule memory from experience memory affects learning and authorization, and evaluate the trade-offs between authority boundaries, privacy, security, and performance.',
    bodyZh: '我计划继续推进 MORI 后续算法研究，面向长期、多人参与的人机交互开展优化，研究规则记忆与经验记忆的分离如何影响学习和授权，并评估权利边界、隐私安全与性能之间的平衡。' },
];

export function FuturePlans({ social = false }: { social?: boolean }) {
  return <section className="section future-plans" id="future-plans">
    <h2><span data-lang="en">Future plans</span><span data-lang="zh">未来计划</span></h2>
    <p className="future-plans-intro" data-lang="en">Some of these plans are already taking shape. Others are ideas I would like to explore when the right opportunity comes along.</p>
    <p className="future-plans-intro" data-lang="zh">这里有些是正在推进的计划，有些还只是天马行空的想法，等待合适的机会去探索。</p>
    <div className="future-plan-list">{plans.slice(0, social ? 4 : 2).map(plan => <article key={plan.title}>
      <h3><span data-lang="en">{plan.title}</span><span data-lang="zh">{plan.titleZh}</span></h3>
      <p data-lang="en">{plan.body}</p><p data-lang="zh">{plan.bodyZh}</p>
    </article>)}
      <article>
        <h3><span data-lang="en">Developing Medical and Engineering Innovators</span><span data-lang="zh">继续推动医工学人的发展</span></h3>
        {!social && <><p data-lang="en">Through Medical and Engineering Innovators, we have built an active community of nearly 3,000 members, primarily highly educated professionals.</p><p data-lang="zh">我们通过医工学人组织了一个近 3,000 人、以高学历专业人士为主的活跃社群。</p></>}
        <p data-lang="en">I hope to continue developing this community into a hub connecting clinicians, engineers, R&amp;D companies, and venture investors, helping them find collaborators and develop projects around clinical needs.</p>
        <p data-lang="zh">我希望继续推动医工学人的发展，让它成为连接医生、工程师、研发企业与创投部门的枢纽，帮助大家围绕临床需求寻找合作者、推进项目。</p>
      </article>
    </div>
    <details className="future-horizon">
      <summary><span data-lang="en">Further ahead: questions I would like to explore</span><span data-lang="zh">更远一些：我还想探索的问题</span></summary>
      <div>
        <p data-lang="en">What makes us feel accompanied, desired, or loved? I am curious about which sensory and behavioral cues contribute to these experiences, and whether an embodied artificial partner could meet some of those needs.</p>
        <p data-lang="zh">是什么让人感到被陪伴、被渴望、被爱？我想进一步拆解这些体验中的感官与行为线索，探索具身人工伙伴能否满足其中一部分需求。</p>
        <p data-lang="en">Animal experiments could help me study the cues involved in social approach, aggression, and sexual behavior. Human studies would ask different questions about companionship, intimacy, and sexual needs. These are longer-term ideas, with the specific experiments and collaborations still to be developed.</p>
        <p data-lang="zh">动物实验可以帮助我研究社交接近、攻击与性行为中的基础线索；未来的人类研究则会进一步探讨陪伴、亲密与性相关需求。这些目前是远期想法，具体实验与合作还需要逐步寻找机会。</p>
      </div>
    </details>
  </section>;
}
