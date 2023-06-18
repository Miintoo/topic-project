import styled from 'styled-components';

const Item = styled.li`
  width: 16%;
  padding: 0 0.7rem 2rem;
`;

const Title = styled.p`
  margin-top: 0.7rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Grade = styled.p`
  margin-top: 0.4rem;

  font-size: 0.2rem;
`;

const Image = styled.img`
  width: 100%;

  border-radius: 0.5rem;
`;

export { Item, Image, Title, Grade };
