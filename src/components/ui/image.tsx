import * as React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export function Image({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      width={width}
      height={height}
      {...props}
    />
  );
}
