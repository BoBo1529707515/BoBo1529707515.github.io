'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type FigureDetails = {
  eyebrow: string;
  eyebrowZh: string;
  title: string;
  titleZh: string;
  origin?: {
    label: string;
    labelZh: string;
    title: string;
    titleZh: string;
    image: string;
    imageAlt: string;
    body: string;
    bodyZh: string;
    bridge: string;
    bridgeZh: string;
    citation: string;
    href: string;
  };
  detailFigure?: {
    image: string;
    imageAlt: string;
    caption: string;
    captionZh: string;
  };
  methods: string[];
  methodsZh: string[];
  reading: string;
  readingZh: string;
};

type FigureLightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  captionZh?: string;
  fit: 'cover' | 'contain';
  details: FigureDetails;
};

export function FigureLightbox({ src, alt, caption, captionZh, fit, details }: FigureLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button className="project-primary-media figure-trigger" type="button" onClick={() => setOpen(true)} aria-label={`Open figure and methods for ${details.title}`}>
        <Image src={src} alt={alt} width={2000} height={1200} unoptimized className={`project-primary-image project-primary-image-${fit}`} />
        {caption && <span className="image-caption" data-lang="en">{caption}</span>}
        {captionZh && <span className="image-caption" data-lang="zh">{captionZh}</span>}
      </button>

      {open && (
        <div className="figure-lightbox" role="dialog" aria-modal="true" aria-labelledby="figure-lightbox-title" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setOpen(false);
        }}>
          <div className="figure-lightbox-panel">
            <button className="figure-lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="Close figure"><span data-lang="en">Close ×</span><span data-lang="zh">关闭 ×</span></button>
            <div className="figure-lightbox-visual">
              <Image src={src} alt={alt} width={2000} height={1200} priority unoptimized className="figure-lightbox-image" />
              <a href={src} target="_blank" rel="noreferrer"><span data-lang="en">Open original image</span><span data-lang="zh">打开原图</span> ↗</a>
            </div>
            <div className="figure-lightbox-copy">
              <p className="eyebrow accent"><span data-lang="en">{details.eyebrow}</span><span data-lang="zh">{details.eyebrowZh}</span></p>
              <h3 id="figure-lightbox-title"><span data-lang="en">{details.title}</span><span data-lang="zh">{details.titleZh}</span></h3>
              {details.origin && (
                <section className="figure-origin" aria-label="Scientific origin of this analysis">
                  <p className="figure-origin-label"><span data-lang="en">{details.origin.label}</span><span data-lang="zh">{details.origin.labelZh}</span></p>
                  <h4><span data-lang="en">{details.origin.title}</span><span data-lang="zh">{details.origin.titleZh}</span></h4>
                  <a className="figure-origin-image" href={details.origin.href} target="_blank" rel="noreferrer">
                    <Image src={details.origin.image} alt={details.origin.imageAlt} width={882} height={766} unoptimized />
                    <span>{details.origin.citation} ↗</span>
                  </a>
                  <p className="figure-origin-body" data-lang="en">{details.origin.body}</p>
                  <p className="figure-origin-body" data-lang="zh">{details.origin.bodyZh}</p>
                  <div className="figure-origin-bridge">
                    <p data-lang="en">{details.origin.bridge}</p>
                    <p data-lang="zh">{details.origin.bridgeZh}</p>
                  </div>
                </section>
              )}
              {details.detailFigure && (
                <figure className="figure-detail-figure">
                  <a href={details.detailFigure.image} target="_blank" rel="noreferrer">
                    <Image
                      src={details.detailFigure.image}
                      alt={details.detailFigure.imageAlt}
                      width={886}
                      height={825}
                      unoptimized
                    />
                  </a>
                  <figcaption>
                    <span data-lang="en">{details.detailFigure.caption}</span>
                    <span data-lang="zh">{details.detailFigure.captionZh}</span>
                  </figcaption>
                </figure>
              )}
              <p className="figure-method-heading"><span data-lang="en">ANALYSIS PIPELINE</span><span data-lang="zh">分析流程</span></p>
              <ol className="figure-method-list">
                {details.methods.map((method, index) => (
                  <li key={method}>
                    <p data-lang="en">{method}</p>
                    <p data-lang="zh">{details.methodsZh[index]}</p>
                  </li>
                ))}
              </ol>
              <div className="figure-reading">
                <p data-lang="en">{details.reading}</p>
                <p data-lang="zh">{details.readingZh}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
