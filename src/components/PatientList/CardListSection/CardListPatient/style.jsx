import styled from "styled-components";

export const CardListPatientContainer = styled.div`
  background: ${({ $bgcolor }) => $bgcolor || "#fdf5fb"};
  border: none;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  height: 90px;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ $bordercolor }) => $bordercolor || "#b71c1c"},
      ${({ $bordercolor }) => $bordercolor || "#b71c1c"}cc
    );
    border-radius: 16px 16px 0 0;
  }

  .card_title {
    color: #64748b;
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 6px;
    display: block;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .card_content {
    color: #1e293b;
    font-size: 28px;
    font-weight: 700;
    margin-right: auto;
    margin-left: 0;
    line-height: 1;
  }

  .card_icon_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 48px;
    height: 48px;
    background: linear-gradient(
      135deg,
      ${({ $bordercolor }) => $bordercolor || "#b71c1c"}15,
      ${({ $bordercolor }) => $bordercolor || "#b71c1c"}25
    );
    border-radius: 12px;
    position: relative;
  }

  .card_icone {
    width: 24px;
    height: 24px;
    color: ${({ $bordercolor }) => $bordercolor || "#b71c1c"};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1200px) {
    grid-column: span 1;
    min-width: unset;
    max-width: unset;
    margin: 0;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    min-width: unset;
    max-width: unset;
    margin: 0;
  }
`;
