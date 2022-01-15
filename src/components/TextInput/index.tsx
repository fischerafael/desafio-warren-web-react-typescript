import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

interface Props extends InputProps {
  value: string;
  onChange: (e: any) => void;
}

export const TextInput = ({ value, onChange }: Props) => {
  return (
    <InputGroup w="full">
      <InputLeftElement>
        <Icon as={HiSearch} />
      </InputLeftElement>

      <Input value={value} onChange={onChange} />
    </InputGroup>
  );
};
