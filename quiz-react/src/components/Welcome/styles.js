import styled from "styled-components";



export const Title = styled.h1`
text-align: center;
padding-top: 3rem;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

export const Subtitle = styled.p`
text-align: center;
padding-top: 1rem;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

export const WelcomeDiv = styled.div`
text-align: center;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;

`;

export const Button = styled.button`
  margin-top: 2rem;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(
    90deg,
    rgba(132, 53, 222, 1) 0%,
    rgba(184, 84, 232, 1) 100%
  );
  border-radius: 3rem;
  border: none;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(184, 84, 232, 1) 0%,
      rgba(132, 53, 222, 1) 100%
    );
  }
`;
