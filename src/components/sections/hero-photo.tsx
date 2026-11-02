"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type HeroPhotoProps = {
  name: string;
  className?: string;
};

export function HeroPhoto({ name, className }: HeroPhotoProps) {
  const [showImage, setShowImage] = useState(true);

  return (
    <div
      className={cn(
        "relative aspect-[4/4.6] overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[var(--gradient-surface)]" />
      {showImage ? (
        <Image
          src="/images/hatim.png"
          alt={`${name} professional portrait`}
          fill
          priority
          sizes="(min-width: 1024px) 292px, (min-width: 640px) 280px, 80vw"
          className="relative z-10 object-cover"
          onError={() => setShowImage(false)}
        />
      ) : (
        <div className="relative z-10 flex size-full items-center justify-center">
          <div className="flex size-24 items-center justify-center rounded-full border bg-background/80 text-3xl font-semibold tracking-normal text-foreground shadow-sm">
            HK
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background/55 to-transparent" />
    </div>
  );
}
