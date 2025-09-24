"use client";

import Image, { StaticImageData } from "next/image";
import { memo, useCallback, useState } from "react";
import { MediaContainer } from "~/components/media-container";
import { cn } from "~/utils";

export const ImageCard = memo<{ src: string; alt: string }>(({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = useCallback(() => setIsLoaded(true), []);

  return (
    <MediaContainer loading={!isLoaded} className="w-full aspect-[1440/900]">
      <Image
        src={src}
        alt={alt}
        priority
        loading="eager"
        unoptimized
        fill
        onLoad={handleLoaded}
        className={cn("object-fit", isLoaded ? "opacity-100" : "opacity-0")}
      />
    </MediaContainer>
  );
});
ImageCard.displayName = "ImageCard";

export const VideoCard = memo<{ src: string }>(({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = useCallback(() => setIsLoaded(true), []);

  return (
    <MediaContainer loading={!isLoaded} className="w-full aspect-[1440/900]">
      <video
        src={src}
        autoPlay
        playsInline
        muted
        loop
        controls={false}
        onCanPlayThrough={handleLoaded}
        className={cn("object-fit", isLoaded ? "opacity-100" : "opacity-0")}
      />
    </MediaContainer>
  );
});
VideoCard.displayName = "VideoCard";
