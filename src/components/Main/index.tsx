import { HStack, Input, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  header: ReactNode;
  table: ReactNode;
}

export const MainSection = ({ header, table }: Props) => {
  return (
    <HStack w="100vw" h="90vh" justify="center" px="4" shadow="sm">
      <VStack
        w="full"
        maxW="container.md"
        h="full"
        align="flex-start"
        overflow="auto"
        p="4"
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#fafafa",
            borderRadius: "24px",
          },
        }}
      >
        {header}
        {table}
      </VStack>
    </HStack>
  );
};
