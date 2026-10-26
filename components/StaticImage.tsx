import type { ImgHTMLAttributes } from 'react';
import previews from '../lib/image-previews.json';

type Preview = { width: number; height: number; variants: { src: string; width: number }[] };
export const imagePreviews: Record<string, Preview> = previews;

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  priority?: boolean;
  unoptimized?: boolean;
  original?: boolean;
};

/** Responsive files work on GitHub Pages without a runtime image optimizer. */
export default function StaticImage({ src, priority, unoptimized: _unoptimized, original = false, sizes, loading, decoding, fetchPriority, ...props }: Props) {
  const preview = original ? undefined : imagePreviews[src];
  const fallback = preview?.variants.find(item => item.width >= 960) ?? preview?.variants.at(-1);
  const displayWidth = Number(props.width) || 1100;
  return <img {...props}
    src={fallback?.src ?? src}
    srcSet={preview?.variants.map(item => `${item.src} ${item.width}w`).join(', ')}
    sizes={preview ? sizes ?? (displayWidth <= 320 ? `${displayWidth}px` : `(max-width: 640px) calc(100vw - 40px), ${Math.min(displayWidth, 1100)}px`) : undefined}
    loading={priority ? 'eager' : loading ?? 'lazy'}
    fetchPriority={fetchPriority ?? (priority ? 'high' : undefined)}
    decoding={decoding ?? 'async'}
  />;
}
