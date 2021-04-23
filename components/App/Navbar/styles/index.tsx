import { SvgIcon } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styled from "styled-components";
import { NavbarProps } from "../Main";

const navbarMobileHeight: number = 70;
const navbarDesktopHeight: number = 110;

const Root = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: ${navbarMobileHeight} + "px";

  @media (min-width: 1024px) {
    height: ${navbarDesktopHeight} + "px";
  }
`;

interface AnchorProps {
  anchored?: boolean;
}

const Anchor = styled.div<AnchorProps>`
  width: 100%;
  visibility: hidden;
  top: 0;
  left: 0;
  position: ${(props) => (props.anchored ? "relative" : "fixed")};
  height: ${navbarMobileHeight} + "px";

  @media (min-width: 1024px) {
    height: ${navbarDesktopHeight} + "px";
  }
`;

const ContainerMain = styled.div`
  width: 100%;
  height: 100%;
`;

const LogoContainer = styled.div``;

const ItemContainer = styled.div``;

const BurguerMenuContainer = styled.div`
  .MuiSvgIcon-root {
    fill: #fff;
  }
`;

interface NavbarLayoutProps extends NavbarProps {}

const NavbarLayout: React.FC<NavbarLayoutProps> = ({
  children,
  anchored = false,
}) => {
  return (
    <Root>
      <ContainerMain>
        <BurguerMenuContainer>
          <SvgIcon component={Menu} />
        </BurguerMenuContainer>
        <LogoContainer>
          <img src="/logo.svg" alt="Logotipo - Munay Cartas Contempladas" />
        </LogoContainer>
      </ContainerMain>

      <Anchor anchored={anchored} />
    </Root>
  );
};
