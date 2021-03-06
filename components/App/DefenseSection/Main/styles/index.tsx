import { motion } from "framer-motion";
import InView from "react-intersection-observer";
import styled from "styled-components";

const Root = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.palette.background.main};
  padding: 5% 3%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.75rem;
  color: ${(props) => props.theme.palette.primary.main};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  flex-direction: column;

  span {
    font-weight: bolder;
  }

  @media (min-width: 1024px) {
    font-size: 2.815rem;
    flex-direction: row;

    span {
      margin: 0px 8px;
    }
  }
`;

const CardContainer = styled.div`
  padding-top: 5%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  grid-gap: 10px;
  justify-items: center;
  grid-row-gap: 28px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CardRoot = styled.div`
  width: 296.17px;
  height: 302.45px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 4.07796px 4.07796px rgba(0, 0, 0, 0.25);
  border-radius: 12.2339px;
  padding: 20px 20px;
`;

const CardTitle = styled.div`
  height: 36%;
  font-size: 1.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${(props) => props.theme.palette.secondary.dark};
`;

const CardText = styled.div`
  padding: 10px 30px 10px 30px;
  height: calc(100% - 36%);
  font-size: 1.125rem;
  color: ${(props) => props.theme.palette.primary.main};
  line-height: 21.09px;
`;

interface CardProps {
  title?: string;
  text?: string;
}

const Card = ({ text, title }: CardProps) => {
  return (
    <CardRoot>
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardRoot>
  );
};

interface DefenseSectionLayoutProps {}

const defenseCards: CardProps[] = [
  {
    title: "O que ?? cons??rcio",
    text:
      "?? um modelo de aquisi????o de cr??dito baseado na uni??o de um grupo de pessoas com o mesmo objetivo para adquirir um bem ou servi??o.",
  },

  {
    title: "Como funciona a carta contemplada",
    text:
      "O titular do cons??rcio pode transferir o cr??dito para terceiros. Ter uma carta em m??os garante que voc?? negocie melhores condi????es de pagamento ?? vista. ",
  },
  {
    title: "Como comprar seu cons??rcio",
    text:
      "Ap??s avaliar todas as op????es dispon??veis, escolha a que melhor atende as suas necessidades e entre em contato conosco.",
  },

  {
    title: "Contempla????o da carta de cr??dito",
    text:
      "Receba todas as informa????es do contrato, valores e documentos por e-mail de forma facilitada.",
  },
];

const DefenseSectionLayout = ({}: DefenseSectionLayoutProps) => {
  return (
    <InView triggerOnce={false}>
      {({ entry, inView, ref }) => {
        return (
          <Root ref={ref}>
            <Container>
              <Title>
                Entenda <span> como funcionam </span> os cons??rcios.
              </Title>

              <CardContainer>
                {defenseCards.map((cardValue, index: number) => {
                  return (
                    <motion.div
                      key={index}
                      initial="hidden"
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: 150 },
                      }}
                      animate={inView ? "visible" : "hidden"}
                      transition={{
                        delay: index * 0.2,
                      }}
                    >
                      <Card text={cardValue.text} title={cardValue.title} />
                    </motion.div>
                  );
                })}
              </CardContainer>
            </Container>
          </Root>
        );
      }}
    </InView>
  );
};

export default DefenseSectionLayout;
