import { Fade, LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

interface Props {
  isLoading: boolean;
}

const Container = styled.div`
  .MuiLinearProgress-colorPrimary {
    background-color: tomato;
  }

  .MuiLinearProgress-barColorPrimary {
    background-color: #fff;
  }
`;

const Loading = ({ isLoading }: Props) => {
  return (
    <Fade in={isLoading} timeout={{ enter: 100, exit: 100 }}>
      <Container>
        <LinearProgress className="linearProgress" />
      </Container>
    </Fade>
  );
};

export default Loading;
