import styled from "styled-components";
import { motion } from "framer-motion";
import InView from "react-intersection-observer";

const Root = styled.div`
  background-color: ${(props) => props.theme.palette.background.main};
  height: 100%;
  width: 100%;
  padding: 5%;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.85rem;
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2.815rem;
    text-align: left;
  }
`;

const AdvantageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5% 0%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const AdvantageRoot = styled.div`
  width: 275px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 3%;
`;

const AdvantageImageContainer = styled.div`
  width: 100%;
  height: 170px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }
`;

const AdvantageTitle = styled.div`
  color: ${(props) => props.theme.palette.secondary.dark};
  font-size: 1.625rem;
  font-weight: bolder;
  padding-top: 20px;
  text-align: center;
`;

const AdvantageText = styled.div`
  font-size: 1.115rem;
  color: #333;
  text-align: center;
  line-height: 21.09px;
`;

interface AdvantageProps {
  imagePath: string;
  title: string;
  text: string;
  animate?: boolean;
}

const Advantage = ({
  imagePath,
  text,
  title,
  animate = true,
}: AdvantageProps) => {
  return (
    <AdvantageRoot>
      <motion.div
        initial={"hidden"}
        animate={animate ? "visible" : "hidden"}
        variants={{
          hidden: { scale: 0 },
          visible: { rotate: 360, scale: 1 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <AdvantageImageContainer>
          <img src={imagePath} alt={title} />
        </AdvantageImageContainer>
      </motion.div>
      <AdvantageTitle>{title}</AdvantageTitle>
      <AdvantageText>{text}</AdvantageText>
    </AdvantageRoot>
  );
};

const advantageList: AdvantageProps[] = [
  {
    imagePath: "/svg/1.svg",
    title: "As menores taxas do mercado",
    text:
      "Investir em consórcios é a melhor saída a longo prazo pois tem as menores taxas comparado as outras formas de empréstimo.",
  },

  {
    imagePath: "/svg/2.svg",
    title: "Poder de compra à vista",
    text:
      "Quando você é contemplado, tem acesso ao valor total da sua carta de crédito. Isso quer dizer que você pode negociar melhores valores pagando à vista.",
  },
  {
    imagePath: "/svg/3.svg",
    title: "Prazos estendidos para pagamento",
    text:
      "O consórcio de veículos apresenta prazos de até 84 meses para pagamento, e os de imóveis até 180 meses. ",
  },

  {
    imagePath: "/svg/4.svg",
    title: "Sem imposto de IOF",
    text:
      "Uma das vantagens do consórcio é que ele não opera com o Imposto sobre Operações, muito comum em bancos e financiadoras.",
  },
];

interface AdvantagesLayoutProps {}

const AdvantagesLayout = ({}: AdvantagesLayoutProps) => {
  return (
    <InView
      triggerOnce={false}
      threshold={global.window && global.window.innerWidth > 1024 ? 0.6 : 0}
    >
      {({ entry, inView, ref }) => {
        return (
          <Root ref={ref}>
            <Container>
              <Title>
                As <strong>vantagens</strong> de fazer um consórcio
              </Title>
              <AdvantageContainer>
                {advantageList.map((advantageValue, index: number) => {
                  return (
                    <Advantage
                      animate={inView}
                      imagePath={advantageValue.imagePath}
                      text={advantageValue.text}
                      title={advantageValue.title}
                      key={index}
                    />
                  );
                })}
              </AdvantageContainer>
            </Container>
          </Root>
        );
      }}
    </InView>
  );
};

export default AdvantagesLayout;
