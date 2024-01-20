import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media screen and (min-width: 180px) and (max-width: 780px) {
      ${props}
    }
  `;
};

export const tab = (props) => {
  return css`
    @media screen and (min-width: 780px) and (max-width: 1080px) {
      ${props}
    }
  `;
};
