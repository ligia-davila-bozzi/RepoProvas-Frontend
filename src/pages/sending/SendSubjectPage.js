import styled from "styled-components";
import { subjects } from "../../services/mock";
import Brand from "../../shared/Brand";
import { StyledQuestionTitle } from "../../shared/StyledComponents";
import BackButton from "./components/BackButton";

export default function SendSubjectPage() {
  return (
    <>
      <Brand />
      <BackButton />
      <StyledContainer>
        <StyledQuestionTitle>Qual a disciplina?</StyledQuestionTitle>
        <StyledOptionsContainer>
          {subjects.map(subject=> <button>{subject.name}</button>)}
        </StyledOptionsContainer>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 32px;
  margin-top: 80px;
  align-items: center;
`;
const StyledOptionsContainer = styled.div`
  width: 322px;
  background: #f6e7d9;
  box-shadow: 6px 8px 14px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 24px 0;
  display:flex;
  flex-direction: column;
  gap:16px;
  button {
    width: 100%;
    height: 40px;
    background: #FFF;
    border-width:1px 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-size: 18.72px;
    display: flex;
    align-items: center;
    padding-left: 16px;
  }
`;
