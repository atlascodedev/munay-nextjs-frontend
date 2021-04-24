import styled from "styled-components";
import { motion } from "framer-motion";

const Root = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 0%;
  white-space: normal;
  background-color: ${(props) => props.theme.palette.background.secondary};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 1.875rem;
  width: 100%;
  display: flex;
  font-style: normal;
  font-weight: 500;
  justify-content: center;
  line-height: 53px;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2.8125rem;
    text-align: left;
  }
`;

const SliderContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 5% 0px;
`;

const CardRoot = styled.div`
  /* width: 375px; */
  width: 100%;
  height: auto;
  margin: 15px;
  min-height: 258.13px;

  color: ${(props) => props.theme.palette.primary.contrastText};
  background: ${(props) => props.theme.palette.primary.light};
  box-shadow: 0px 3.08016px 3.08016px rgba(0, 0, 0, 0.25);
  border-radius: 20.5506px;
  padding: 40px;

  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 60px;
    margin: 0px;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CardText = styled.div`
  font-style: normal;
  font-weight: 600;
  width: 100%;
  margin-bottom: 35px;

  font-size: 1rem;
  line-height: 28px;

  @media (min-width: 1024px) {
    font-size: 1.475rem;
  }
`;

const CardProfileInfoContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CardProfilePicture = styled.div`
  width: 85.07px;
  height: 85.07px;
  background: #e7e7e7;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

const CardNameLocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;

const CardProfileName = styled.div`
  font-weight: 600;
`;

const CardProfileLocation = styled.div``;

interface TestimonialCardProps {
  text: string;
  imageURL?: string;
  name: string;
  location: string;
}

export const TestimonialCard = ({
  imageURL = "https://via.placeholder.com/750",
  location,
  name,
  text,
}: TestimonialCardProps) => {
  return (
    <CardRoot>
      <CardContainer>
        <CardText>{text}</CardText>
        <CardProfileInfoContainer>
          <CardProfilePicture>
            <img
              src={imageURL}
              alt="Foto de cliente em depoimento sobre a empresa."
            />
          </CardProfilePicture>
          <CardNameLocationContainer>
            <CardProfileName>{name}</CardProfileName>
            <CardProfileLocation>{location}</CardProfileLocation>
          </CardNameLocationContainer>
        </CardProfileInfoContainer>
      </CardContainer>
    </CardRoot>
  );
};

interface TestimonialsLayoutProps {}

const TestimonialsLayout: React.FC<TestimonialsLayoutProps> = ({
  children,
}) => {
  return (
    <Root>
      <Container>
        <Title>Depoimentos de quem investe.</Title>
        <SliderContainer>{children}</SliderContainer>
      </Container>
    </Root>
  );
};

export default TestimonialsLayout;
