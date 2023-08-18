import React from 'react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  width:number;
  height:number;
  className?: string;
}
const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className, width, height }) => {
  return <div ><img src={src} alt={alt} className={className} style={{width:`${width}px`, height:`${height}`}} /> </div>;
};

export default ImageLoader

