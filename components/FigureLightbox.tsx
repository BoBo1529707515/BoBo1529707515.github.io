'use client';

import Image from 'next/image';
import { useId, useState } from 'react';
import { ResearchDialog } from './ResearchDialog';
import { FigureViewer } from './FigureViewer';

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
  rawFigure?: {
    label: string;
    labelZh: string;
    image: string;
    imageAlt: string;
    caption: string;
    captionZh: string;
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
  const titleId = useId();

  return (
    <>
      <button className="project-primary-media figure-trigger" type="button" onClick={() => setOpen(true)} aria-label={`Open figure and methods for ${details.title}`}>
        <Image src={src} alt={alt} width={2000} height={1200} unoptimized className={`project-primary-image project-primary-image-${fit}`} />
        <span className="interactive-media-cue"><span data-lang="en">Click for methods &amp; interpretation ↗</span><span data-lang="zh">点击查看方法与解读 ↗</span></span>
        {caption && <span className="image-caption" data-lang="en">{caption}</span>}
        {captionZh && <span className="image-caption" data-lang="zh">{captionZh}</span>}
      </button>

      <ResearchDialog open={open} onOpenChange={setOpen} titleId={titleId}>
          <div className="figure-lightbox-panel">
            <header className="project-detail-header">
              <p className="eyebrow accent"><span data-lang="en">{details.eyebrow}</span><span data-lang="zh">{details.eyebrowZh}</span></p>
              <h3 id={titleId}><span data-lang="en">{details.title}</span><span data-lang="zh">{details.titleZh}</span></h3>
            </header>
            <div className="figure-lightbox-visual">
              <FigureViewer src={src} alt={alt} />
            </div>
            <div className="figure-lightbox-copy">
              {details.origin && (
                <section className="figure-origin" aria-label="Scientific origin of this analysis">
                  <p className="figure-origin-label"><span data-lang="en">{details.origin.label}</span><span data-lang="zh">{details.origin.labelZh}</span></p>
                  <h4><span data-lang="en">{details.origin.title}</span><span data-lang="zh">{details.origin.titleZh}</span></h4>
                  <FigureViewer src={details.origin.image} alt={details.origin.imageAlt} />
                  <a className="text-link" href={details.origin.href} target="_blank" rel="noreferrer">{details.origin.citation} ↗</a>
                  <p className="figure-origin-body" data-lang="en">{details.origin.body}</p>
                  <p className="figure-origin-body" data-lang="zh">{details.origin.bodyZh}</p>
                  <div className="figure-origin-bridge">
                    <p data-lang="en">{details.origin.bridge}</p>
                    <p data-lang="zh">{details.origin.bridgeZh}</p>
                  </div>
                </section>
              )}
              {details.rawFigure && (
                <figure className="figure-raw-recording">
                  <p className="figure-origin-label">
                    <span data-lang="en">{details.rawFigure.label}</span>
                    <span data-lang="zh">{details.rawFigure.labelZh}</span>
                  </p>
                  <a href={details.rawFigure.image} target="_blank" rel="noreferrer">
                    <Image
                      src={details.rawFigure.image}
                      alt={details.rawFigure.imageAlt}
                      width={147}
                      height={140}
                      unoptimized
                    />
                  </a>
                  <figcaption>
                    <span data-lang="en">{details.rawFigure.caption}</span>
                    <span data-lang="zh">{details.rawFigure.captionZh}</span>
                  </figcaption>
                </figure>
              )}
              {details.detailFigure && (
                <figure className="figure-detail-figure">
                  <FigureViewer src={details.detailFigure.image} alt={details.detailFigure.imageAlt} />
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
      </ResearchDialog>
    </>
  );
}
