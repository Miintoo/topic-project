import React, { useState, useEffect } from 'react';
import { Item, Image, Title, Grade, StatusContainer, HeartIcons, HeartInIcons } from './Topic.styled';

type TopicType = {
  title: string;
  imgPath: string;
  grade: string;
  index: string;
};

export default function Topic({ title, imgPath, grade, index }: TopicType): JSX.Element {
  const [isHeart, setIsHeart] = useState<boolean>(false);

  useEffect(() => {
    let thumbsState: string | null = localStorage.getItem('thumbsUp');
    if (!thumbsState) {
      thumbsState = '';
      return;
    }

    if (JSON.parse(thumbsState).includes(index)) {
      setIsHeart(true);
    } else {
      setIsHeart(false);
    }
  }, []);

  const handleClick = () => {
    let thumbsUpList: string | null = localStorage.getItem('thumbsUp');
    if (!thumbsUpList) {
      thumbsUpList = '[]';
    }
    const parseThumbsUpList: string[] = JSON.parse(thumbsUpList);
    if (isHeart) {
      const filterList = parseThumbsUpList?.filter((item: string) => item !== index);
      localStorage.setItem('thumbsUp', JSON.stringify(filterList));
    } else {
      parseThumbsUpList.push(index);
      localStorage.setItem('thumbsUp', JSON.stringify(parseThumbsUpList));
    }
    setIsHeart((prev) => !prev);
  };

  return (
    <Item>
      <p>
        <Image src={imgPath} loading="lazy" width="170" height="170" alt="토픽 이미지" />
      </p>
      <Title>{title}</Title>
      <StatusContainer>
        <Grade>{grade}</Grade>
        {isHeart ? <HeartInIcons onClick={handleClick} /> : <HeartIcons onClick={handleClick} />}
      </StatusContainer>
    </Item>
  );
}
