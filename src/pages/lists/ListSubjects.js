import styled from "styled-components";
import Brand from "../../shared/Brand";
import { StyledQuestionTitle } from "../../shared/StyledComponents";
import BackButton from "../../components/BackButton";
import * as APIrequest from "../../services/API/requests";
import OptionCard from "./components/OptionCard";
import { useEffect, useState } from "react";

export default function ListSubjects() {
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    APIrequest.getSubjectsBySemester()
      .then((res) => {
        setSemesters(res.data);
      })
      .catch(() =>
        alert(
          "Erro ao carregar lista de semestres. Por favor, recarregue a página."
        )
      );
  }, []);
  return (
    <>
      <Brand />
      <BackButton />
      <StyledContainer>
        <StyledQuestionTitle>Qual a matéria?</StyledQuestionTitle>
        {semesters.map((semester, index) => (
          <OptionCard
            key={index}
            isEmpty={!semester.arrayOfSubjects.length}
            semester={semester.semester.name}
            subjects={semester.arrayOfSubjects}
          />
        ))}
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
  gap: 24px;
`;
