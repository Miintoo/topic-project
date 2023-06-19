import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
`;

const Header = styled.header``;

const Section = styled.section`
  max-width: 1180px;
  margin: auto;
`;

const InfoArticle = styled.article`
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
`;

const SearchInput = styled.input`
  width: 18rem;
  height: 3rem;
  padding: 0 1rem 0 1rem;

  outline: none;
  border: 1px solid #e5e5e5;
  border-radius: 0.5rem;

  font-size: 1.2rem;
  color: #444;

  &::placeholder {
    font-size: 0.9rem;

    opacity: 0.4;
  }
`;

const CategorySelectButton = styled.select`
  position: absolute;
  right: 3rem;
  appearance: none;

  width: 9rem;
  padding: 0.6em 1.4em 0.5em 0.8em;
  margin: 0;
  border: 1px solid #aaa;
  border-radius: 0.5em;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);

  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  color: #444;
  background-color: #fff;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const TopicArticle = styled.article`
  margin-top: 5rem;
`;

const ItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export {
  Container,
  Header,
  ItemContainer,
  Section,
  TopicArticle,
  CategorySelectButton,
  InfoArticle,
  InputContainer,
  SearchInput
};
