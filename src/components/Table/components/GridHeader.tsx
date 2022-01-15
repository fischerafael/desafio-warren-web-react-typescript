import { Grid, GridItem, Text } from "@chakra-ui/react";

export const GridHeader = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap="4" w="full" pb="2">
      <GridItem colSpan={2} w="full">
        <Text fontSize="xs" color="pink.500">
          Título
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text fontSize="xs" color="pink.500">
          Descrição
        </Text>
      </GridItem>
      <GridItem>
        <Text fontSize="xs" color="pink.500">
          Status
        </Text>
      </GridItem>
      <GridItem>
        <Text fontSize="xs" color="pink.500">
          Valor
        </Text>
      </GridItem>
    </Grid>
  );
};
