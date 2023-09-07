import React, { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  className?: string
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h1>{children}</h1>;
};
