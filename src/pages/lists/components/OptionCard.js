import styled from "styled-components";
import GettingContext from "../../../contexts/GettingContext ";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function OptionCard({ isEmpty, semester, subjects }) {
  const { selectedSubject, setSelectedSubject } = useContext(GettingContext);
  const navigate = useNavigate();
  function selectAndGoForward(subject) {
    setSelectedSubject(subject);
    navigate("kind");
  }
  return (
    <StyledOptionsContainer isEmpty={isEmpty}>
      <h1>
        <strong>{semester}</strong>
      </h1>
      {subjects.map((subject, index) => (
        <StyledOption
          key={index}
          isSelected={selectedSubject?.id === subject.id}
          onClick={() => selectAndGoForward(subject)}
        >
          {subject.name}
        </StyledOption>
      ))}
    </StyledOptionsContainer>
  );
}
const StyledOptionsContainer = styled.div`
  background: #f6e7d9;
  box-shadow: 6px 8px 14px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 24px 0;
  display: ${(props) => (props.isEmpty ? "none" : "flex")};
  flex-direction: column;
  gap: 16px;
  width: 100%;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 18.72px;
  }
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
