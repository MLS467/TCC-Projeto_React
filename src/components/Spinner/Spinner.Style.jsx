import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  margin-top: ${({ $marginTop }) => ($marginTop ? $marginTop : "0")};
  justify-content: center;
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : "center")};
  width: 100%;
  height: 700px;
  img {
    width: ${({ widthSpinner }) => (widthSpinner ? widthSpinner : "100px")};
    height: ${({ heightSpinner }) => (heightSpinner ? heightSpinner : "100px")};
  }
`;
