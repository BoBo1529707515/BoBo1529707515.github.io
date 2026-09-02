'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type FigureDetails = {
  eyebrow: string;
  title: string;
  titleZh: string;
  origin?: {
    label: string;
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
  methods: string[];
  methodsZh: string[];
  reading: string;
  readingZh: string;
};

type FigureLightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  fit: 'cover' | 'contain';
  details: FigureDetails;
};

export function FigureLightbox({ src, alt, caption, fit, details }: FigureLightboxProps) {
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
        <Image src={src} alt={alt} width={2000} height={1200} className={`project-primary-image project-primary-image-${fit}`} />
        {caption && <span className="image-caption">{caption}</span>}
      </button>

      {open && (
        <div className="figure-lightbox" role="dialog" aria-modal="true" aria-labelledby="figure-lightbox-title" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setOpen(false);
        }}>
          <div className="figure-lightbox-panel">
            <button className="figure-lightbox-close" type="button" onClick={() => setOpen(false)} aria-label="Close figure">Close ×</button>
            <div className="figure-lightbox-visual">
              <Image src={src} alt={alt} width={2000} height={1200} priority className="figure-lightbox-image" />
              <a href={src} target="_blank" rel="noreferrer">Open original image ↗</a>
            </div>
            <div className="figure-lightbox-copy">
              <p className="eyebrow accent">{details.eyebrow}</p>
              <h3 id="figure-lightbox-title">{details.title}</h3>
              <p className="figure-lightbox-title-zh">{details.titleZh}</p>
              {details.origin && (
                <section className="figure-origin" aria-label="Scientific origin of this analysis">
                  <p className="figure-origin-label">{details.origin.label}</p>
                  <h4>{details.origin.title}</h4>
                  <p className="figure-origin-title-zh">{details.origin.titleZh}</p>
                  <a className="figure-origin-image" href={details.origin.href} target="_blank" rel="noreferrer">
                    <Image src={details.origin.image} alt={details.origin.imageAlt} width={882} height={766} />
                    <span>{details.origin.citation} ↗</span>
                  </a>
                  <p className="figure-origin-body">{details.origin.body}</p>
                  <p className="figure-origin-body-zh">{details.origin.bodyZh}</p>
                  <div className="figure-origin-bridge">
                    <p>{details.origin.bridge}</p>
                    <p>{details.origin.bridgeZh}</p>
                  </div>
                </section>
              )}
              <p className="figure-method-heading">ANALYSIS PIPELINE · 分析流程</p>
              <ol className="figure-method-list">
                {details.methods.map((method, index) => (
                  <li key={method}>
                    <p>{method}</p>
                    <p>{details.methodsZh[index]}</p>
                  </li>
                ))}
              </ol>
              <div className="figure-reading">
                <p>{details.reading}</p>
                <p>{details.readingZh}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
