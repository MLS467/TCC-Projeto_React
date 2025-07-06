import styled from "styled-components";
import { palette } from "../../../../constant/colors";

export const UpdateFormWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, ${palette[50]} 0%, ${palette[100]} 100%);
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  .content-wrapper {
    flex: 1;
    padding: 30px 0;
    margin: 30px auto;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;
