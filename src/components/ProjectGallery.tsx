"use client";

import { useState } from "react";
import Image from "next/image";

export type GalleryImage = { src: string; caption: string };

export default function ProjectGallery({
  images,
  status,
}: {
  images: GalleryImage[];
  status: string;
}) {
  const [index, setIndex] = useState(0);
  const go = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);
  const current = images[index];

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/20">
        {/* All frames stay mounted (and preloaded) so switching is instant — only opacity toggles */}
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
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ))}
        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-zinc-300 backdrop-blur">
          {status}
        </span>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
            >
              ›
            </button>
          </>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between gap-3">
        <p className="min-w-0 truncate text-xs text-zinc-500">{current.caption}</p>
        {images.length > 1 && (
          <div className="flex shrink-0 gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}`}
                className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
