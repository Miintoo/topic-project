import React, { useState } from 'react';
import { Item, Image, Title, Grade, StatusContainer, HeartIcons, HeartInIcons } from './Topic.styled';

type TopicType = {
  title: string;
  imgPath: string;
  grade: string;
};

export default function Topic({ title, imgPath, grade }: TopicType): JSX.Element {
  const [isHeart, setIsHeart] = useState<boolean>(false);

  const handleClick = () => {
    setIsHeart((prev) => !prev);
  };

  return (
    <Item>
      <p>
        <Image src={imgPath} alt="토픽 이미지" />
      </p>
      <Title>{title}</Title>
      <StatusContainer>
        <Grade>{grade}</Grade>
        {isHeart ? <HeartInIcons onClick={handleClick} /> : <HeartIcons onClick={handleClick} />}
      </StatusContainer>
    </Item>
  );
}
