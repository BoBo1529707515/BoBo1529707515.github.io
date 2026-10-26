'use client';

import { useState } from 'react';
import StaticImage, { imagePreviews } from './StaticImage';
import { recordEvent } from '../lib/site-analytics.mjs';

/** Keep scientific figures uncropped; zoom inside a scrollable viewport. */
export function FigureViewer({ src, alt, zoomWidth }: { src: string; alt: string; zoomWidth?: number }) {
  const [zoomed, setZoomed] = useState(false);
  const [naturalWidth, setNaturalWidth] = useState(imagePreviews[src]?.width ?? 1200);
  const toggleZoom = () => {
    if (!zoomed) recordEvent('Image enlarge', { target: src.includes('talk-') ? 'talks' : src.includes('reground') ? 'reground' : src.includes('mori') ? 'mori' : src.includes('robotic') || src.includes('mpn-two-photon') || src.includes('planned-mpn') ? 'robotic-mouse' : src.includes('ads1299') || src.includes('usb-isolation') ? 'ads1299' : src.includes('ad5933') ? 'ad5933' : 'social-need-dynamics' });
    setZoomed(!zoomed);
  };
  return <div className="figure-viewer">
    <div className="figure-viewer-controls">
      <button type="button" aria-pressed={zoomed} onClick={toggleZoom}>
        <span data-lang="en">{zoomed ? 'Fit to page' : 'Enlarge image'}</span>
        <span data-lang="zh">{zoomed ? '适应页面' : '放大图片'}</span>
      </button>
      <a href={src} target="_blank" rel="noreferrer"><span data-lang="en">Original image ↗</span><span data-lang="zh">打开原图 ↗</span></a>
    </div>
    <div className={`figure-viewer-canvas${zoomed ? ' is-zoomed' : ''}`} tabIndex={zoomed ? 0 : undefined} aria-label={zoomed ? 'Enlarged figure; scroll to inspect' : undefined}>
      <button type="button" className="figure-image-toggle" aria-label={`${zoomed ? 'Fit image' : 'Enlarge image'}: ${alt}`} aria-pressed={zoomed} onClick={toggleZoom} style={zoomed ? { width: zoomWidth ?? Math.max(1000, naturalWidth), maxWidth: 'none' } : undefined}><StaticImage src={src} alt={alt} original={zoomed} loading={zoomed ? 'eager' : 'lazy'} onLoad={(event) => { if (zoomed || !imagePreviews[src]) setNaturalWidth(event.currentTarget.naturalWidth); }} /></button>
    </div>
    {zoomed && <p className="figure-zoom-hint"><span data-lang="en">Scroll within the figure to inspect each panel. Resolution is limited by the original image.</span><span data-lang="zh">在图内滚动查看各子图；清晰度受原始图片分辨率限制。</span></p>}
  </div>;
}
