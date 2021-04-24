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
    title: "O que é consórcio",
    text:
      "É um modelo de aquisição de crédito baseado na união de um grupo de pessoas com o mesmo objetivo para adquirir um bem ou serviço.",
  },

  {
    title: "Como funciona a carta contemplada",
    text:
      "O titular do consórcio pode transferir o crédito para terceiros. Ter uma carta em mãos garante que você negocie melhores condições de pagamento à vista. ",
  },
  {
    title: "Como comprar seu consórcio",
    text:
      "Após avaliar todas as opções disponíveis, escolha a que melhor atende as suas necessidades e entre em contato conosco.",
  },

  {
    title: "Contemplação da carta de crédito",
    text:
      "Receba todas as informações do contrato, valores e documentos por e-mail de forma facilitada.",
  },
];

const DefenseSectionLayout = ({}: DefenseSectionLayoutProps) => {
  return (
    <Root>
      <Container>
        <Title>
          Entenda <span> como funcionam </span> os consórcios.
        </Title>

        <CardContainer>
          {defenseCards.map((cardValue, index: number) => {
            return (
              <Card key={index} text={cardValue.text} title={cardValue.title} />
            );
          })}
        </CardContainer>
      </Container>
    </Root>
  );
};

export default DefenseSectionLayout;
