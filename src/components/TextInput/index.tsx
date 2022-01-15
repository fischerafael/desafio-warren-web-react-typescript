import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";
import { HiSearch } from "react-icons/hi";

interface Props extends InputProps {}

export const TextInput = ({ ...props }: Props) => {
  return (
    <InputGroup w="full">
      <InputLeftElement color="gray.400" children={<HiSearch />} />
      <Input {...props} />
    </InputGroup>
  );
};
