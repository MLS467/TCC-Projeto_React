import styled from "styled-components";

export const CardListPatientContainer = styled.div`
  background: ${({ $bgcolor }) => $bgcolor || "#fdf5fb"};
  border: 0.5px solid ${({ $bordercolor }) => $bordercolor || "#b71c1c"};
  border-radius: 10px;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 24%;
  max-width: 24%;
  min-height: 50px;
  height: 70px;
  box-sizing: border-box;
  margin: 8px 0;

  .card_title {
    color: ${({ $bordercolor }) => $bordercolor || "#b71c1c"};
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 4px;
    display: block;
    text-align: left;
  }

  .card_content {
    color: ${({ $bordercolor }) => $bordercolor || "#b71c1c"};
    font-size: 18px;
    font-weight: bold;
    margin-right: auto;
    margin-left: 12px;
  }

  .card_icon_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .card_icone {
    width: 16px;
    height: 16px;
    background: ${({ $bordercolor }) => $bordercolor || "#b71c1c"};
    border-radius: 50%;
    display: inline-block;
  }
`;
