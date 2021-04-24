import { SvgIcon, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { DriveEta, Home, Motorcycle, PersonAdd } from "@material-ui/icons";
import styled from "styled-components";
import { HeroProps } from "..";

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 40px 20px;

  @media (min-width: 1024px) {
    width: 40vw;
    margin: 50px;
  }

  @media (min-width: 1600px) {
    margin: 100px;
    margin-top: 150px;
  }
`;

const ImageContainer = styled.div`
  height: 50vw;
  width: 100%;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }

  img {
    height: 100%;
    width: auto;
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 33px;
`;

const ActionContainer = styled.div`
  margin: 30px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  width: 100%;
  grid-gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SubText = styled.div`
  color: ${(props) => props.theme.palette.primary.dark};
  font-size: 1rem;
`;

const CardRoot = styled.div`
  width: 145.19px;
  height: 145.19px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.palette.secondary.dark};
  cursor: pointer;
  transition: all 0.2s linear;

  border: ${(props) => `2.8px solid ${props.theme.palette.secondary.main}`};
  box-sizing: border-box;
  border-radius: 11.3737px;
  flex-direction: column;

  :hover {
    box-shadow: 1px 6px 5px rgba(0, 0, 0, 0.25);
    transform: translate3d(0px, -2px, 10px);
  }

  @media (min-width: 1024px) {
    width: 153.18px;
    height: 153.18px;
  }
`;

const CardTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bolder;
  line-height: 30px;
  padding-top: 15px;
`;

const CardIcon = styled.div`
  .MuiSvgIcon-root {
    fill: ${(props) => props.theme.palette.secondary.dark};
    font-size: 5rem;
  }
`;

interface HeroCardProps {
  title?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const HeroCard = ({ icon = Home, title = "Casa" }: HeroCardProps) => {
  return (
    <CardRoot>
      <CardTitle>{title}</CardTitle>
      <CardIcon>
        <SvgIcon component={icon} />
      </CardIcon>
    </CardRoot>
  );
};

interface HeroLayoutProps extends HeroProps {}

const HeroLayout = ({}: HeroLayoutProps) => {
  return (
    <Root>
      <Container>
        <MainContainer>
          <Title>
            É muito fácil simular e investir em cartas contempladas.
          </Title>

          <ActionContainer>
            <HeroCard title={"Casa"} icon={Home} />
            <HeroCard title={"Carro"} icon={DriveEta} />
            <HeroCard title={"Moto"} icon={Motorcycle} />
          </ActionContainer>

          <SubText>Escolha uma das opções para prosseguir</SubText>
        </MainContainer>
        <ImageContainer>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2F1-8.webp?alt=media"
            alt="Mulher jovem feliz olhando para o celular"
          />
        </ImageContainer>
      </Container>
    </Root>
  );
};

export default HeroLayout;
