import styled from "styled-components";

export default function Home() {
  return (
    <>
      <StyledTitle>RepoProvas</StyledTitle>
      <StyledDescription>
        Encontre todas as provas antigas das matérias que está fazendo e
        contribua para que outros alunos façam o mesmo
      </StyledDescription>
      <StyledContainer>
        <h1>O que você quer fazer hoje?</h1>
        <button>Enviar Prova</button>
        <button>Consultar Provas</button>
      </StyledContainer>
    </>
  );
}

const StyledTitle = styled.h1`
  margin: 32px 0 0 32px;
  font-family: "Satisfy", cursive;
  font-size: 32px;
  color: #f7f7f7;
`;
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
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    color: #f7f7f7;
  }
  button {
    background: #f6e7d9;
    box-shadow: 6px 8px 14px 1px rgba(0, 0, 0, 0.25);
    border:none;
    border-radius: 15px;
    width: 263px;
    height: 144px;
    font-family: "Roboto", sans-serif;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 0.1em;
  }
`;
