import styled from 'styled-components';

const Item = styled.li`
  width: 14.76%;
  padding: 0 0.7rem 2rem;
`;

const Title = styled.p`
  margin-top: 0.7rem;

  font-family: 'Noto Sans KR', sans-serif;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Grade = styled.p`
  margin-top: 0.4rem;

  font-size: 0.2rem;
  opacity: 0.7;
`;

const Image = styled.img`
  width: 100%;

  border-radius: 0.5rem;
`;

export { Item, Image, Title, Grade };
