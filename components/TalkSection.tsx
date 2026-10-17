import Image from 'next/image';
import { TextDetails } from './TextDetails';

const eventPhotos = [
  { file: 'talk-2036-yibo-stage.png', en: 'My talk: “Addressing loneliness: better companionship through AI”', zh: '我的报告：「对抗孤单，让 AI 提供更好的陪伴」', width: 1920, height: 1279 },
  { file: 'talk-2036-audience.png', en: 'Forum participants and audience', zh: '论坛现场合照', width: 1921, height: 1280 },
  { file: 'talk-2036-neuroai.png', en: 'Guest talk: NeuroAI, brain-inspired continual learning and agent memory', zh: '同场嘉宾报告：NeuroAI 硅碳共生——脑启发的持续学习与智能体记忆', width: 1600, height: 1066 },
  { file: 'talk-2036-world-models.png', en: 'Guest talk: world-model physics engines and embodied systems', zh: '同场嘉宾报告：世界模型物理引擎与具身系统', width: 1920, height: 1279 },
];

export function TalkSection() {
  return <section className="section talks-section" id="talks">
    <div className="section-heading compact"><h1><span data-lang="en">Research talks.</span><span data-lang="zh">研究分享。</span></h1></div>
    <article className="talk-card">
      <a className="talk-photo" href="/assets/talk-emotionally-intelligent-ai.png" target="_blank" rel="noreferrer" aria-label="Enlarge talk photograph"><Image src="/assets/talk-emotionally-intelligent-ai.png" alt="Yibo Yuan presenting a talk on emotionally intelligent AI, human–AI collaboration, and social loneliness" width={1600} height={1066} priority /><span className="image-caption"><span data-lang="en">A conversation about AI and human connection · enlarge ↗</span><span data-lang="zh">关于 AI 与人类连接的分享 · 点击放大 ↗</span></span></a>
      <div className="talk-copy">
        <p className="talk-event"><span data-lang="en">2036: Carbon–Silicon Coexistence<br /><time dateTime="2026-07-12">12 July 2026</time> · Shanghai</span><span data-lang="zh">2036 碳硅共生现场<br /><time dateTime="2026-07-12">2026 年 7 月 12 日</time> · 上海</span></p>
        <p className="eyebrow accent"><span data-lang="en">AI · COLLABORATION · SOCIAL CONNECTION</span><span data-lang="zh">人工智能 · 人机协作 · 社交连接</span></p>
        <h2 data-lang="en">Toward emotionally intelligent AI for better human–AI collaboration</h2>
        <h2 data-lang="zh">构建更有情商的 AI，让人机协作更好</h2>
        <p data-lang="en">In this talk, I discussed how AI could better understand and respond to human emotions and social needs, support collaboration, and help address loneliness—while preserving human agency and connection.</p>
        <p data-lang="zh">这次报告围绕一个愿景展开：让 AI 更好地理解和回应人的情绪与社交需求，支持更好的人机协作，并探索缓解社交孤独的可能性，同时保留人的自主性与真实的人际连接。</p>
        <TextDetails title="Emotionally intelligent AI and human connection" titleZh="更有情商的 AI 与人类连接" label="About this talk" labelZh="查看报告详情" analyticsId="talks">
          <div className="talk-detail-copy">
            <p className="talk-original-title"><span data-lang="en">Talk title: “Addressing loneliness: better companionship through AI”</span><span data-lang="zh">报告题目：「对抗孤单，让 AI 提供更好的陪伴」</span></p>
            <p data-lang="en">The central question is not only whether AI can produce empathetic language, but how it should respond to people in an ongoing relationship. I brought together three questions:</p><p data-lang="zh">核心问题不仅是 AI 能否说出有同理心的话，更是它应当如何在持续的关系中回应人。我围绕三个问题展开分享：</p>
            <ul><li><span data-lang="en">How can AI recognize and respond to emotions and social needs appropriately?</span><span data-lang="zh">AI 如何恰当地理解和回应人的情绪与社交需求？</span></li><li><span data-lang="en">How can human–AI collaboration support people without overriding their choices?</span><span data-lang="zh">人机协作如何为人提供支持，而不替代人的自主选择？</span></li><li><span data-lang="en">When might AI companionship help alleviate loneliness, and when might it displace human connection?</span><span data-lang="zh">AI 陪伴何时可能缓解孤独，又何时可能挤占真实的人际连接？</span></li></ul>
            <p data-lang="en">These are research questions and design goals, not a claim that the systems presented have been shown to reduce loneliness.</p><p data-lang="zh">这些是研究问题与设计目标，并不意味着所介绍的系统已被证实能够减少孤独。</p>
          </div>
          <section className="talk-event-gallery" aria-label="Event photographs / 活动照片">
            <h3><span data-lang="en">From the event</span><span data-lang="zh">活动现场</span></h3>
            <p className="talk-gallery-hint"><span data-lang="en">Shanghai · 12 July 2026 · Select a photograph to enlarge.</span><span data-lang="zh">上海 · 2026 年 7 月 12 日 · 点击照片查看大图。</span></p>
            <div className="talk-photo-grid">{eventPhotos.map(photo => <figure key={photo.file}>
              <a href={`/assets/${photo.file}`} target="_blank" rel="noreferrer" aria-label={`Enlarge: ${photo.en}`}><Image src={`/assets/${photo.file}`} alt={photo.en} width={photo.width} height={photo.height} loading="lazy" /></a>
              <figcaption><span data-lang="en">{photo.en}</span><span data-lang="zh">{photo.zh}</span></figcaption>
            </figure>)}</div>
          </section>
        </TextDetails>
      </div>
    </article>
  </section>;
}
