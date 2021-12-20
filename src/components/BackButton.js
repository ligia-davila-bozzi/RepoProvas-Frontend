import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BackButton() {
    let navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>voltar</Button>;
}

const Button = styled.button`
  position: absolute;
  right: 30px;
  width: 134px;
  height: 51px;
  background: #f6e7d9;
  box-shadow: 6px 8px 14px 1px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0.1em;
`;
