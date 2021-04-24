import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.background.secondary};
  padding: 5%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const PicturesMainContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 100%;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 53px;
  color: ${(props) => props.theme.palette.primary.dark};

  @media (min-width: 1024px) {
    font-size: 2.835rem;
  }
`;
