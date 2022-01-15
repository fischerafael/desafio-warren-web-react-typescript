import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

interface Props {
  value: string;
  onChange: (e: any) => void;
}

export const TextInput = ({ value, onChange }: Props) => {
  return (
    <InputGroup w="full">
      <InputLeftElement color="gray.400" children={<HiSearch />} />
      <Input value={value} onChange={onChange} />
    </InputGroup>
  );
};
