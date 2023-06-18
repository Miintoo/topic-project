import React from 'react';
import { Item, Image, Title, Grade } from './Topic.styled';

type TopicType = {
  title: string;
  imgPath: string;
  grade: string;
};

export default function Topic({ title, imgPath, grade }: TopicType): JSX.Element {
  return (
    <Item>
      <p>
        <Image src={imgPath} alt="토픽 이미지" />
      </p>
      <Title>{title}</Title>
      <Grade>{grade}</Grade>
    </Item>
  );
}
