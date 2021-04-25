import { motion, motionValue } from "framer-motion";
import InView from "react-intersection-observer";
import styled from "styled-components";
import AdonisImage from "../../../../Util/AdonisImage";

const ContactRoot = styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  width: 100%;
  padding: 8%;

  @media (min-width: 1024px) {
    padding: 5% 5% 0% 5%;
  }
`;

const ContactInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ContactInnerFormContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: calc(100% - 43%);
    min-width: calc(100% - 43%);
    order: 0;
  }
`;

const ContactInnerImageContainer = styled(motion.div)`
  position: relative;
  display: none;

  @media (min-width: 1024px) {
    max-width: 43%;
    display: block;
    min-width: 43%;
    order: 1;
    height: 100vh;
  }
`;

const ContactInnerImage = styled.img`
  width: 100%;
  transform: translateY(-10px);
`;

const ContactInnerImageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-left: 6%;
  padding-right: 6%;
  margin-bottom: 10%;

  @media (min-width: 1024px) {
    text-align: right;
    padding-right: 15%;
    padding-left: 0px;
    margin-bottom: 0px;
  }
`;

const ContactInnerImageTextTitle = styled.div`
  font-size: 20px;
  color: #da4e49;
  margin-top: 10px;

  @media (min-width: 1024px) {
    font-size: 35px;
    margin-top: 0px;
  }
`;

const ContactInnerImageTextAux = styled.div`
  font-family: "Roboto";

  font-size: 14.6px;

  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;

const ContactInnerImageDetailOne = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 150px;
  width: 40px;
  z-index: 100;
  transform: translate(-75px, -10px);
`;

interface ContactLayoutContainerProps {
  imageURL: string;
  children: React.ReactNode;
}

const ContactLayoutContainer = ({
  imageURL = "https://via.placeholder.com/500",
  children,
}: ContactLayoutContainerProps) => {
  return (
    <InView triggerOnce={true} threshold={0.5}>
      {({ entry, inView, ref }) => {
        return (
          <ContactRoot ref={ref}>
            <ContactInnerContainer>
              <ContactInnerImageContainer
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 100 },
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                  src={imageURL}
                  alt="Senhora sorrindo ao utilizar celular"
                />
              </ContactInnerImageContainer>

              <ContactInnerFormContainer>{children}</ContactInnerFormContainer>
            </ContactInnerContainer>
          </ContactRoot>
        );
      }}
    </InView>
  );
};

export default ContactLayoutContainer;
