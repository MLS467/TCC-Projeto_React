import styled from "styled-components";
import { palette } from "../../../constant/colors";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  /* border: 1px solid #000; */

  span {
    color: ${palette[600]};
    font-size: 25px;
    font-weight: bold;
  }
  img {
    width: 50px;
    height: 50px;
  }
`;
