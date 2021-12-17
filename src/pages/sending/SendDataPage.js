import { useContext } from "react";
import styled from "styled-components";
import SendingContext from "../../contexts/SendingContext";
import { examCategories } from "../../services/mock";
import Brand from "../../shared/Brand";
import { StyledQuestionTitle } from "../../shared/StyledComponents";
import BackButton from "./components/BackButton";

export default function SendDataPage() {
  const {
    examName,
    setExamName,
    pdfLink,
    setPDFLink,
    selectedCategory,
    setSelectedCategory,
  } = useContext(SendingContext);
  function requestSubmition(e) {
    e.preventDefault();
    if(!selectedCategory) return alert("Por favor escolha uma categoria");

  }
  return (
    <>
      <Brand />
      <BackButton />
      <StyledForm onSubmit={requestSubmition}>
        <StyledInput
          placeholder="Nome da prova ex(2021.2)"
          type="number"
          onChange={(event) => setExamName(event.target.value)}
          value={examName}
          required
        />
        <StyledQuestionTitle>Qual a categoria?</StyledQuestionTitle>
        <StyledOptionsContainer>
          {examCategories.map((category,index) => (
            <StyledOption
            key={index}
              onClick={() => setSelectedCategory(category)}
              isSelected={category === selectedCategory}
            >
              {category}
            </StyledOption>
          ))}
        </StyledOptionsContainer>
        <StyledInput
          placeholder="Link do pdf"
          type="url"
          onChange={(event) => setPDFLink(event.target.value)}
          value={pdfLink}
          required
        />
        <StyledSendButton type="submit">ENVIAR</StyledSendButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 32px;
  margin-top: 80px;
  align-items: center;
  width: 322px;
`;
const StyledOptionsContainer = styled.div`
  background: #f6e7d9;
  box-shadow: 6px 8px 14px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
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
const StyledInput = styled.input`
  width: 100%;
  height: 64px;
  background: #f6e7d9;
  border: 1px solid #000000;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 18.72px;
  color: #3f3f3f;
  padding-left: 16px;
`;
const StyledSendButton = styled.button`
  width: 100%;
  height: 72px;
  background: #f6e7d9;
  box-shadow: 6px 8px 14px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: 2px solid #ff7800;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0.1em;
  margin-bottom: 8px;
`;
