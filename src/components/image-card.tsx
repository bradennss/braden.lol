"use client";

import Image, { ImageProps } from "next/image";
import { memo, useCallback, useState } from "react";
import { Spinner } from "~/components/spinner";
import { cn } from "~/utils";

export type ImageCardProps = { className?: string } & Omit<ImageProps, "fill">;

export const ImageCard = memo<ImageCardProps>(
  ({ className, alt, onLoad, ...imageProps }) => {
    const [imageIsLoaded, setImageIsLoaded] = useState(false);
    const handleImageLoaded = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setImageIsLoaded(true);
        onLoad?.(event);
      },
      [onLoad]
    );

    return (
      <div
        className={cn(
          "relative aspect-video border border-foreground",
          className
        )}
      >
        <div className="absolute inset-0 bg-linear-to-b from-foreground/5 to-foreground/25 flex items-center justify-center">
          <Spinner className="bg-background" />
        </div>
        <Image
          {...imageProps}
          fill
          alt={alt}
          onLoad={handleImageLoaded}
          className={cn(
            "object-fit",
            imageIsLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    );
  }
);
ImageCard.displayName = "ImageCard";
