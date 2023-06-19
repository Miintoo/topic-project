import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topic from '../../components/topic/Topic';
import {
  Container,
  Header,
  ItemContainer,
  Section,
  TopicArticle,
  CategorySelectButton,
  InfoArticle
} from './Main.styled';

type TopicType = {
  title: string;
  idx: string;
  imgPath: string;
  grade: string;
};

export default function Main(): JSX.Element {
  const [topics, setTopics] = useState<TopicType[] | undefined>();
  const [storageTopics, setStorageTopics] = useState<TopicType[] | undefined>();

  const getTopics = async () => {
    const { data } = await axios.get('http://localhost:3001/topic');
    setTopics(data);
    setStorageTopics(data);
  };

  useEffect(() => {
    getTopics();
  }, []);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value === '전체') {
      setTopics(storageTopics);
      return;
    }
    const newTopics = storageTopics?.filter((topic) => topic.grade === e.target.value);
    setTopics(newTopics);
  };

  return (
    <Container>
      <Header>토픽 사이트</Header>
      <Section>
        <InfoArticle>
          <div>
            <form action="get">
              <input type="text" placeholder="토픽 제목 검색" />
            </form>
          </div>
          <CategorySelectButton name="category" onChange={handleCategory}>
            <option value="전체">전체</option>
            <option value="입문">입문</option>
            <option value="초급">초급</option>
            <option value="중급">중급</option>
            <option value="중고급">중고급</option>
            <option value="고급">고급</option>
          </CategorySelectButton>
        </InfoArticle>
        <TopicArticle>
          <ItemContainer>
            {topics
              ? topics.map((topic: TopicType) => (
                  <Topic key={topic.idx} title={topic.title} imgPath={topic.imgPath} grade={topic.grade} />
                ))
              : ''}
          </ItemContainer>
        </TopicArticle>
      </Section>
    </Container>
  );
}
