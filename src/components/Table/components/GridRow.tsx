import { Grid, GridItem, Text, useDisclosure } from "@chakra-ui/react";
import { ITransactionResponse } from "../../../data/interfaces";
import { useModal } from "../../../hook/useModal";
import { formatStatus } from "../../../utils";

export const GridRow = ({
  transaction,
}: {
  transaction: ITransactionResponse;
}) => {
  const { onModalOpen } = useModal();

  const { status } = transaction;

  const formatedStatus = formatStatus(status);

  return (
    <>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="4"
        w="full"
        h="10"
        alignContent="center"
        cursor="pointer"
        onClick={() => onModalOpen(transaction)}
        _hover={{ bg: "gray.50" }}
      >
        <GridItem colSpan={2}>
          <Text fontSize="xs">{transaction.title}</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text fontSize="xs">{transaction.description}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="xs">{formatedStatus}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="xs">R$ {transaction.amount}</Text>
        </GridItem>
      </Grid>
    </>
  );
};
