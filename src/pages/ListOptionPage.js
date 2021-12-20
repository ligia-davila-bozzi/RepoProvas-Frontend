import { Link } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";
import Brand from "../shared/Brand";
import { StyledQuestionTitle } from "../shared/StyledComponents";
export default function ListOptionPage() {
  return (
    <>
      <Brand />
      <BackButton />
      <StyledContainer>
        <StyledQuestionTitle>Como você quer buscar?</StyledQuestionTitle>
        <Link to="/get/subjects">
          <button>Buscar por matéria</button>
        </Link>
        <button onClick={() => alert("Esta parte ainda está em construção")}>
          Buscar por professor 
        </button>
      </StyledContainer>
    </>
  );
}
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
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    letter-spacing: 0.1em;
  }
`;
