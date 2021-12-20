import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SendingContext from "../../contexts/SendingContext";
import Brand from "../../shared/Brand";
import { StyledQuestionTitle } from "../../shared/StyledComponents";
import BackButton from "../../components/BackButton";
import * as APIrequest from "../../services/API/requests";
import { useNavigate } from "react-router-dom";

export default function SendDataPage() {
  const [categories, setCategories] = useState([]);
  const {
    selectedSubject,
    selectedProfessor,
    examName,
    setExamName,
    pdfLink,
    setPDFLink,
    selectedCategory,
    setSelectedCategory,
  } = useContext(SendingContext);
  useEffect(() => {
    APIrequest.getCategories()
      .then((res) => setCategories(res.data))
      .catch(() =>
        alert(
          "Erro ao carregar lista de categorias. Por favor, recarregue a página."
        )
      );
  }, []);
  const navigate = useNavigate();
  function requestSubmition(e) {
    e.preventDefault();
    if (!selectedCategory) return alert("Por favor escolha uma categoria");
    APIrequest.postExam({
      name: examName,
      professorId: selectedProfessor.id,
      subjectId: selectedSubject.id,
      categoryId: selectedCategory.id,
      pdfLink,
    })
      .then(() => {
        alert("Obrigado por contribuir!");
        navigate("/");
      })
      .catch(() => alert("Erro ao enviar tente novamente mais tarde."));
  }
  return (
    <>
      <Brand />
      <BackButton />
      <StyledContainer>
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
            {categories.map((category, index) => (
              <StyledOption
                key={index}
                onClick={() => setSelectedCategory(category)}
                isSelected={category === selectedCategory}
              >
                {category.name}
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
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 80px;
  align-items: center;
  width: 100%;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;
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
