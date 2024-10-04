import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.COLORS.textColor400};
  margin-left: 3px;
  font-size: ${(props) => props.theme.FONT_SIZES.sm};
`;

export const Select = styled.select`
  width: 100%;
  background-color: ${(props) => props.theme.COLORS.inputBackground};
  color: ${(props) => props.theme.COLORS.inputPlaceholderColor};
  border: 1px solid ${(props) => props.theme.COLORS.inputBorderColor};
  outline: none;
  box-sizing: border-box;
  padding: 10px 13px;
  transition: all 0.3s;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.COLORS.inputBackgroundHover};
  }

  &:focus {
    border-color: 1px solid
      ${(props) => props.theme.COLORS.inputBorderColorFocus};
  }
`;
