import React from "react";
import styled from "styled-components";
import { fonts } from "../theme/helpers";

const Sub = ({ text, className }) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

export default styled(Sub)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.body};
  letter-spacing: ${fonts.space};
  line-height: 2.5;

  p {
    transform: translate(-20vw, 50px);
  }
`;