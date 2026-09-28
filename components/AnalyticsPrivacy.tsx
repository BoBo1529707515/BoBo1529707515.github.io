'use client';

import { useEffect, useState } from 'react';
import { initializeAnalytics } from '../lib/site-analytics.mjs';

export function AnalyticsPrivacy() {
  const [excluded, setExcluded] = useState(false);
  const [signal, setSignal] = useState(false);
  useEffect(() => {
    const privacySignal = navigator.doNotTrack === '1' || (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    setSignal(privacySignal);
    try {
      // Owner's bookmark: exclude this browser before making any analytics request.
      if (new URLSearchParams(location.search).get('analytics') === 'off') localStorage.setItem('plausible_ignore', 'true');
      setExcluded(localStorage.getItem('plausible_ignore') === 'true');
    } catch { setExcluded(true); }
    initializeAnalytics();
  }, []);
  const toggle = () => {
    try {
      if (excluded) localStorage.removeItem('plausible_ignore');
      else localStorage.setItem('plausible_ignore', 'true');
      const url = new URL(location.href);
      url.searchParams.delete('analytics');
      location.replace(url.href);
    } catch { setExcluded(true); }
  };
  return <details className="analytics-privacy">
    <summary><span data-lang="en">Privacy &amp; analytics</span><span data-lang="zh">隐私与访问统计</span></summary>
    <div>
      <p data-lang="en">This site uses Plausible for aggregate visits, section views, project-detail opens, approximate visible time, and link clicks. It does not record sessions, form text, or your identity. Plausible processes IP addresses to derive approximate location and daily visitor counts, but does not store raw IP addresses. Query strings are removed except for a small set of generic source labels.</p>
      <p data-lang="zh">本站使用 Plausible 汇总访问、板块浏览、项目详情打开、估算可见停留时间及链接点击，不录屏、不采集表单文字，也不识别个人身份。Plausible 会处理请求 IP 以生成粗略地区和每日访客统计，但不存储原始 IP。网址参数会被移除，仅保留少量通用来源标签。</p>
      <p data-lang="en">No analytics cookies are used. Only an opt-out preference is saved locally. Do Not Track and Global Privacy Control signals are respected. These statistics cannot establish who visited or whether they read the content.</p>
      <p data-lang="zh">不使用统计 Cookie，仅在本地保存退出统计的偏好，并尊重“请勿追踪”和 Global Privacy Control 信号。统计不能确定具体访客身份，也不能证明访客认真阅读了内容。</p>
      <a href="https://plausible.io/data-policy" target="_blank" rel="noreferrer"><span data-lang="en">Plausible data policy ↗</span><span data-lang="zh">Plausible 数据政策 ↗</span></a>
      {signal ? <p><span data-lang="en">Analytics disabled by your browser’s privacy signal.</span><span data-lang="zh">已根据浏览器隐私信号停用统计。</span></p> : <button type="button" onClick={toggle}><span data-lang="en">{excluded ? 'Analytics off on this browser · enable' : 'Exclude this browser from analytics'}</span><span data-lang="zh">{excluded ? '此浏览器已退出统计 · 重新启用' : '将此浏览器排除出统计'}</span></button>}
    </div>
  </details>;
}
