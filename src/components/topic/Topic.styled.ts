import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

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

const StatusContainer = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.6rem;
`;

const Grade = styled.p`
  margin-right: 0.5rem;

  font-size: 0.2rem;
  opacity: 0.7;
`;

const HeartIcons = styled(AiOutlineHeart)`
  cursor: pointer;
`;

const HeartInIcons = styled(AiFillHeart)`
  cursor: pointer;
  color: red;
`;

const Image = styled.img`
  width: 100%;

  border-radius: 0.5rem;
`;

export { Item, Image, Title, Grade, StatusContainer, HeartIcons, HeartInIcons };
