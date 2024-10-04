import { TbError404 } from "react-icons/tb";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Icon = styled(TbError404)`
  color: ${(props) => props.theme.COLORS.primary};
  font-size: 140px;
`;
