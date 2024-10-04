import { ChangeEvent, useId } from "react";
import { Container, Input, Label } from "./styles";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  borderRadius?: "sm" | "md";
  type?: string;
};

const TextInput = ({
  value,
  onChange,
  label,
  placeholder,
  borderRadius = "md",
  type = "text",
}: Props) => {
  const referenceId = useId();

  return (
    <Container>
      {label && <Label htmlFor={referenceId}>{label}</Label>}

      <Input
        id={referenceId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $borderRadius={borderRadius}
        type={type}
      />
    </Container>
  );
};

export default TextInput;
