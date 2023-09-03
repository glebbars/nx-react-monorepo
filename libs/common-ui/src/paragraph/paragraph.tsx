import React, { FC } from 'react';

interface ParagraphProps {
  children: string;
}

export const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p>{children}</p>;
};
