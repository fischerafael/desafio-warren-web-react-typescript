import { Select as ChakraSelect, SelectProps } from "@chakra-ui/react";

interface IOptions {
  label: string;
  status: string;
}

interface Props extends SelectProps {
  options: IOptions[];
}

export const Select = ({ options, ...props }: Props) => {
  return (
    <ChakraSelect w="full" placeholder="Status" {...props}>
      {options?.map((option) => (
        <option key={option.status} value={option.status}>
          {option.label}
        </option>
      ))}
    </ChakraSelect>
  );
};
