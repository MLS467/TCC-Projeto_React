import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  padding: 50px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 1100px;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s ease;
  /* border:1px solid red; */

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: 0.3s;
  }

  @media (max-width: 1100px) {
    width: 70%;
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 45%;
  height: 45%;
  border-radius: 10px;

  @media (max-width: 1100px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Text = styled.div`
  width: 55%;
  padding: 20px;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: #00c4ff;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background: #009ac9;
  }
`;
