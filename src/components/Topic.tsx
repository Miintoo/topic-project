import React from 'react';

type TopicType = {
  title: string;
  imgPath: string;
  grade: string;
};

export default function Topic({ title, imgPath, grade }: TopicType): JSX.Element {
  return (
    <li>
      <p>
        <img src={imgPath} alt="토픽 이미지" />
      </p>
      <p>{title}</p>
      <p>{grade}</p>
    </li>
  );
}
