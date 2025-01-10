import styled from 'styled-components';

export const SuccessContainer = styled.div`
        display: flex;
        justify-content:center;
        align-items: center;
        height: 100vh;
        background-color: #f5f5f5;
`;

export const Card = styled.div`
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 500px;
    width: 100%;
`;

export const Title = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.primary};
`;

export const Message = styled.p`
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #333;
`;

export const Button = styled.button`
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.color.primary};
    }
`;