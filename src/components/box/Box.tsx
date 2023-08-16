import React, { FC } from 'react';

interface InboxProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  top?: number;
  left?:number;
  borderRadius?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode
}

const Box: FC<InboxProps> = ({ src, alt = 'none', width, height, borderRadius, className, style, children, top, left }) => {
  return (
    <div className={className} style={style}>
      <a href='about:blank' target='_blank' style={{ display: 'inline-block' }}>
        <div style={{ position: 'relative' }}>
          <img src={src} alt={alt} style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${borderRadius}px` }} />
          {children}
        </div>
      </a>
    </div>
  );
};

export default Box;
