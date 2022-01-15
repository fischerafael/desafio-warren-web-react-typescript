import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { IStatus } from "../../../data/interfaces";

export const ProgressBar = ({ status }: { status: IStatus }) => {
  const percentage = getProgressBarPercentage(status);

  return (
    <VStack w="full">
      <Flex
        mt="4"
        mb="0"
        w="full"
        bg="gray.100"
        h="2"
        borderRadius="full"
        position="relative"
      >
        <Flex w={`${percentage}%`} bg="pink.500" h="full" borderRadius="full" />
        <Box
          w="6"
          h="6"
          borderRadius="full"
          bg="pink.500"
          position="absolute"
          top="-2"
          left={`${percentage - 2}%`}
        />
      </Flex>

      <HStack w="full" justify="space-between">
        <Text>Solicitada</Text>
        <Text>Processando</Text>
        <Text>Concluída</Text>
      </HStack>
    </VStack>
  );
};

const getProgressBarPercentage = (string: IStatus) => {
  if (string === "created") return 0;
  if (string === "processing") return 50;
  return 100;
};
