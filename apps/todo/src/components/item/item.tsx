import React, { FC } from 'react';
import { ITodo } from '@nx-react-monorepo/data-access';
import { Paragraph, Title } from '@nx-react-monorepo/common-ui';

interface ItemProps {
  item: ITodo;
}

export const Item: FC<ItemProps> = ({ item: { name, details } }) => {
  return (
    <div>
      <Title>{name}</Title>
      <Paragraph>{details}</Paragraph>
    </div>
  );
};
