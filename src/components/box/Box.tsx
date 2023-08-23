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
    <div >
      <a href='about:blank' target='_blank' style={{ display: 'inline-block' }}>
        <div>
          <img src={src} className={className}  />
          {children}
        </div>
      </a>
    </div>
  );
};

export default Box;
