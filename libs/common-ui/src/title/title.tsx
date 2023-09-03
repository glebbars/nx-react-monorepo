import React, { FC, ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h1>{children}</h1>;
};
