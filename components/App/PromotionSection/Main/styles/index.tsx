import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
import { InView } from "react-intersection-observer";

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.palette.background.secondary};
  padding: 3%;
  padding-top: 5%;
  padding-bottom: 5%;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 1024px) {
    height: auto;
    width: 65vh;
    margin: 0;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 50vw;
    padding-top: 5.5%;
    padding-left: 7%;
  }
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${(props) => props.theme.palette.primary.dark};

  @media (min-width: 1024px) {
    font-size: 2.835rem;
    line-height: 53px;
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 1.125rem;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 1.375rem;
  }
`;

interface PromotionSectionLayoutProps {}

const PromotionSectionLayout = ({}: PromotionSectionLayoutProps) => {
  return (
    <InView triggerOnce={false} threshold={0.3}>
      {({ entry, inView, ref }) => {
        return (
          <Root ref={ref}>
            <Container>
              <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{
                  duration: 1,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    x: 0,
                  },
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                }}
              >
                <PicturesMainContainer>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/munay-nextjs-hefesto.appspot.com/o/adonis%2Fgallery%2Fgroup-781.webp?alt=media"
                    alt="Pessoas realizando sonhos"
                  />
                </PicturesMainContainer>
              </motion.div>

              <TextContainer>
                <Title>
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 1 }}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                  >
                    Faça um intercâmbio,
                  </motion.div>{" "}
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 1, delay: 0.3 }}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                  >
                    planeje seu casamento
                  </motion.div>
                  <motion.div
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ duration: 1, delay: 0.6 }}
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 },
                    }}
                  >
                    ou pague a sua formatura.
                  </motion.div>
                </Title>
                <motion.div
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  animate={inView ? "visible" : "hidden"}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <Text>
                    O consórcio de serviços permite que você faça tudo o que
                    sempre sonhou com parcelas que cabem no seu bolso, desde
                    formaturas, até casamentos, viagens, intercâmbio e
                    plásticas. Saiba mais clicando abaixo ou fale conosco.
                  </Text>
                  <Button
                    style={{ color: "#fff" }}
                    color="secondary"
                    variant="contained"
                  >
                    Simular
                  </Button>
                </motion.div>
              </TextContainer>
            </Container>
          </Root>
        );
      }}
    </InView>
  );
};

export default PromotionSectionLayout;
