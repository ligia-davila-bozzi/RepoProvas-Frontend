import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SendingContext from "../../contexts/SendingContext";
import { professors } from "../../services/mock";
import Brand from "../../shared/Brand";
import { StyledQuestionTitle } from "../../shared/StyledComponents";
import BackButton from "./components/BackButton";

export default function SendProfessorPage() {
  const { selectedSubject, selectedProfessor, setSelectedProfessor } =
    useContext(SendingContext);
  const navigate = useNavigate();
  function selectAndGoForward(professor) {
    setSelectedProfessor(professor);
    navigate("data");
  }
  return (
    <>
      <Brand />
      <BackButton />
      <StyledContainer>
        <StyledQuestionTitle>Qual o professor?</StyledQuestionTitle>
        <StyledOptionsContainer>
          {professors.filter(professor => professor.subjects.includes(selectedSubject.id)).map((professor, index) => (
            <StyledOption
              key={index}
              onClick={() => selectAndGoForward(professor)}
              isSelected={selectedProfessor?.id === professor.id}
            >
              {professor.name}
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
