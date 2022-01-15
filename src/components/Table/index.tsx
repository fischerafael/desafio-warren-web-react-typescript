import { useDisclosure, VStack } from "@chakra-ui/react";
import { ITransactionResponse } from "../../data/interfaces";
import { Modal } from "../Modal";
import { GridHeader } from "./components/GridHeader";
import { GridRow } from "./components/GridRow";

interface Props {
  transactions: ITransactionResponse[];
}

export const Table = ({ transactions }: Props) => {
  return (
    <VStack w="full" spacing="0" py="4">
      <GridHeader />

      {transactions?.map((transaction) => (
        <>
          <GridRow key={transaction.id} transaction={transaction} />
        </>
      ))}
    </VStack>
  );
};
