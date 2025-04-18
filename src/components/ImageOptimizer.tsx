import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto'
}) => {
  // Extract file name without extension
  const baseName = src.split('.').slice(0, -1).join('.');
  
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${baseName}.webp`}
        media="(min-width: 1024px)"
      />
      <source
        type="image/webp"
        srcSet={`${baseName}-medium.webp`}
        media="(min-width: 640px)"
      />
      <source
        type="image/webp"
        srcSet={`${baseName}-small.webp`}
      />
      <img
        src={`${baseName}-small.webp`}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};

export default ImageOptimizer;