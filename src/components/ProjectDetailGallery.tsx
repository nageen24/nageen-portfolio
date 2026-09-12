"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type GalleryImage = { src: string; caption: string };

export default function ProjectDetailGallery({
  images,
  status,
}: {
  images: GalleryImage[];
  status: string;
}) {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);
  const current = images[index];

  useEffect(() => {
    if (images.length < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  return (
    <div>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_0_60px_-15px_var(--color-accent-deep)] sm:aspect-[16/8]">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.caption}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-150 ${
              i === index ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
            sizes="100vw"
          />
        ))}

        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-zinc-200 backdrop-blur">
          {status}
        </span>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur transition-colors hover:bg-accent/70 sm:left-5 sm:h-12 sm:w-12"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-xl text-white backdrop-blur transition-colors hover:bg-accent/70 sm:right-5 sm:h-12 sm:w-12"
            >
              ›
            </button>
            <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">{current.caption}</p>
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1}`}
              className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition-colors ${
                i === index ? "border-accent" : "border-white/10 hover:border-white/30"
              }`}
            >
              <Image src={img.src} alt={img.caption} fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
