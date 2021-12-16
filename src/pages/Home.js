import { Link } from "react-router-dom";
import styled from "styled-components";
import Brand from "../shared/Brand";
import {StyledQuestionTitle } from "../shared/StyledComponents";
export default function Home() {
  return (
    <>
      <Brand />
      <StyledDescription>
        Encontre todas as provas antigas das matérias que está fazendo e
        contribua para que outros alunos façam o mesmo
      </StyledDescription>
      <StyledContainer>
        <StyledQuestionTitle>O que você quer fazer hoje?</StyledQuestionTitle>
        <Link to="/send/subjects">
          <button>Enviar Prova</button>
        </Link>
        <button onClick={() => alert("Esta parte ainda está em construção")}>
          Consultar Provas
        </button>
      </StyledContainer>
    </>
  );
}
const StyledDescription = styled.p`
  margin: 32px 0 0 32px;
  font-family: "Roboto", sans-serif;
  font-size: 18.72px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #f7f7f7;
`;
const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 32px;
  margin-top: 40px;
  align-items: center;
  button {
    background: #f6e7d9;
    box-shadow: 6px 8px 14px 1px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 15px;
    width: 263px;
    height: 144px;
    font-family: "Roboto", sans-serif;
    font-weight:bold;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 0.1em;
  }
`;
