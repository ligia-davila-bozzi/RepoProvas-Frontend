import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SendingContext from "../../contexts/SendingContext";
import { subjects } from "../../services/mock";
import Brand from "../../shared/Brand";
import { StyledQuestionTitle } from "../../shared/StyledComponents";
import BackButton from "./components/BackButton";

export default function SendSubjectPage() {
  const { selectedSubject, setSelectedSubject } = useContext(SendingContext);
  const navigate = useNavigate();
  function selectAndGoForward(subject) {
    setSelectedSubject(subject);
    navigate("professors");
  }
  return (
    <>
      <Brand />
      <BackButton />
      <StyledContainer>
        <StyledQuestionTitle>Qual a disciplina?</StyledQuestionTitle>
        <StyledOptionsContainer>
          {subjects.map((subject, index) => (
            <StyledOption
              key={index}
              onClick={() => selectAndGoForward(subject)}
              isSelected={selectedSubject?.id === subject.id}
            >
              {subject.name}
            </StyledOption>
          ))}
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
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const StyledOption = styled.button`
  width: 100%;
  height: 40px;
  background: ${(props) => (props.isSelected ? "#AAFE95;" : "#fff")};
  border-width: 1px 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 18.72px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;
