import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    width?: number;
    height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className,
    priority = false,
    width,
    height,
    ...props
}) => {
    if (!src) return null;
    const isUnsplash = src.includes('images.unsplash.com');

    let optimizedSrc = src;
    let srcSet = undefined;

    if (isUnsplash) {
        // Base optimization
        const baseUrl = src.split('?')[0];
        const params = new URLSearchParams(src.split('?')[1]);

        params.set('auto', 'format');
        params.set('fit', 'crop');
        params.set('q', '80');

        if (width) params.set('w', width.toString());
        if (height) params.set('h', height.toString());

        // Force WebP
        params.set('fm', 'webp');

        optimizedSrc = `${baseUrl}?${params.toString()}`;

        // Generate srcSet for responsive loading
        if (!width) {
            const widths = [640, 768, 1024, 1280];
            srcSet = widths.map(w => {
                const p = new URLSearchParams(params);
                p.set('w', w.toString());
                return `${baseUrl}?${p.toString()} ${w}w`;
            }).join(', ');
        }
    }

    return (
        <img
            src={optimizedSrc}
            srcSet={srcSet}
            alt={alt}
            className={className}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            width={width}
            height={height}
            decoding={priority ? "sync" : "async"}
            {...props}
        />
    );
};
