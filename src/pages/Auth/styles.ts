import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.COLORS.background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 420px;
`;

export const Card = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.COLORS.borderColor};
  padding: 30px;
  box-shadow: black 0px 3px 7px -6px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardTitle = styled.span`
  font-size: ${(props) => props.theme.FONT_SIZES.lg};
  font-weight: 800;
  color: ${(props) => props.theme.COLORS.authCardTitleColor};
`;

export const CardSubTitle = styled.span`
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  font-weight: 600;
  color: ${(props) => props.theme.COLORS.authCardSubTitleColor};
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Link = styled(RouterLink)`
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
  color: ${(props) => props.theme.COLORS.primary};
`;
