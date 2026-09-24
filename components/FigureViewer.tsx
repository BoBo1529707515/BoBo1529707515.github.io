'use client';

import { useState } from 'react';

/** Keep scientific figures uncropped; zoom inside a scrollable viewport. */
export function FigureViewer({ src, alt }: { src: string; alt: string }) {
  const [zoomed, setZoomed] = useState(false);
  const [naturalWidth, setNaturalWidth] = useState(1200);
  return <div className="figure-viewer">
    <div className="figure-viewer-controls">
      <button type="button" aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)}>
        <span data-lang="en">{zoomed ? 'Fit to page' : 'Enlarge labels'}</span>
        <span data-lang="zh">{zoomed ? '适应页面' : '放大查看图中文字'}</span>
      </button>
      <a href={src} target="_blank" rel="noreferrer"><span data-lang="en">Original image ↗</span><span data-lang="zh">打开原图 ↗</span></a>
    </div>
    <div className={`figure-viewer-canvas${zoomed ? ' is-zoomed' : ''}`} tabIndex={zoomed ? 0 : undefined} aria-label={zoomed ? 'Enlarged figure; scroll to inspect' : undefined}>
      <img src={src} alt={alt} loading="lazy" onLoad={(event) => setNaturalWidth(event.currentTarget.naturalWidth)} style={zoomed ? { width: Math.max(1000, naturalWidth), maxWidth: 'none' } : undefined} />
    </div>
    {zoomed && <p className="figure-zoom-hint"><span data-lang="en">Scroll within the figure to inspect each panel. Resolution is limited by the original image.</span><span data-lang="zh">在图内滚动查看各子图；清晰度受原始图片分辨率限制。</span></p>}
  </div>;
}
