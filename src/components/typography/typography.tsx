import classNames from 'classnames';
import * as React from 'react';
import './typography.css'

export type HeaderTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TextTags = 'div' | 'p' | 'span';
export type TextAlignment = 'left' | 'center' | 'right' | 'justify';
export type TextColors = 'lightgrey'|  'white' | 'black' | 'grey' | 'red'; // Corrected to lowercase
export type TextSizes = 'xs' | 'xss' | 's' | 'm' | 'l' | 'xl' | 'mb' | 'lb' | 'lbx' | 'lcx' | 'xxl' | 'xxxl' | 'h1l';
export type TextFamily = 'helvetica' | 'palatino';// ... (Rest of the code remains the same)

export interface TypographyProps {
    children?: React.ReactNode; // Add the children prop here
    html?: boolean;
    params?: {
      key: string;
      value: string;
    };
    msg?: string;
    align?: TextAlignment;
    color?: TextColors;
    tag: TextTags | HeaderTags;
    size?: TextSizes;
    bold?: boolean;
    bolder?: boolean;
    className?: string;
    withNormalLineHeight?: boolean;
    family?: TextFamily;
    normalFontWeight?: boolean;
    underline?: boolean;
    textCenter?: boolean;
    onClick?: (e?: any) => void;
    tabIndex?: number;
    onKeyDown?: (e: any) => void;
  }
  

const Typography: React.FunctionComponent<TypographyProps> = ({
  tag: Tag,
  align,
  color,
  size,
  bold,
  bolder,
  msg = '',
  html,
  className,
  withNormalLineHeight,
  normalFontWeight,
  family,
  underline,
  textCenter,
  tabIndex,
  onClick,
  onKeyDown,
  children, // Add children prop here
}) => {
  const computedClass = classNames(className, {
    [align as string]: align,
    [color as string]: color,
    [size as string]: size,
    bold: bold,
    bolder: bolder,
    underline: underline,
    normalFontWeight: normalFontWeight,
    withNormalLineHeight: withNormalLineHeight,
    [family as string]: family,
    textCenter: textCenter
  });

  if (html) {
    return (
      <Tag dangerouslySetInnerHTML={{ __html: msg }} className={classNames(computedClass, 'htmlContent')} />
    );
  }

  return (
    <Tag onKeyDown={onKeyDown} onClick={onClick} className={computedClass} tabIndex={tabIndex}>
      {msg}
      {children} {/* Add children here */}
    </Tag>
  );
};

export default Typography;
