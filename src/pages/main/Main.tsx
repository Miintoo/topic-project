import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topic from '../../components/topic/Topic';
import { Container, Header, ItemContainer } from './Main.styled';

type TopicType = {
  title: string;
  idx: string;
  imgPath: string;
  grade: string;
};

export default function Main(): JSX.Element {
  const [topics, setTopics] = useState<TopicType[] | undefined>();

  const getTopics = async () => {
    const { data } = await axios.get('http://localhost:3001/topic');
    setTopics(data);
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <Container>
      <Header>토픽 사이트</Header>
      <section>
        <article>
          <ItemContainer>
            {topics
              ? topics.map((topic: TopicType) => (
                  <Topic key={topic.idx} title={topic.title} imgPath={topic.imgPath} grade={topic.grade} />
                ))
              : ''}
          </ItemContainer>
        </article>
      </section>
    </Container>
  );
}
