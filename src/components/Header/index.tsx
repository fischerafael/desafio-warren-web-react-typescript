import { HStack, Image, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <HStack w="100vw" h="10vh" justify="center" px="4" shadow="sm">
      <HStack w="full" maxW="container.md" h="full">
        <Image src="/logo.png" alt="Logo Warren" h="90%" />
      </HStack>
    </HStack>
  );
};
