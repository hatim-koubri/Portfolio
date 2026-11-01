"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type SafeProjectImageProps = {
  src?: string;
  alt: string;
  fallbackLabel: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export function SafeProjectImage({
  src,
  alt,
  fallbackLabel,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  fit = "cover",
}: SafeProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  return (
    <div
      className={cn(
        "relative size-full overflow-hidden bg-background/60",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,color-mix(in_srgb,var(--accent)_28%,transparent),transparent_35%),linear-gradient(135deg,color-mix(in_srgb,var(--card)_88%,transparent),color-mix(in_srgb,var(--muted)_74%,transparent))]" />
      {showImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`relative z-10 object-${fit}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="relative z-10 flex size-full items-center justify-center">
          <div className="flex size-16 items-center justify-center rounded-xl border bg-card/85 text-lg font-semibold text-foreground shadow-sm backdrop-blur">
            {fallbackLabel}
          </div>
        </div>
      )}
    </div>
  );
}
