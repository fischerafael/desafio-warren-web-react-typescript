import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IStatus } from "../../data/interfaces";

import { useModal } from "../../hook/useModal";
import { ProgressBar } from "./components/ProgressBar";

export const Modal = () => {
  const { isOpen, onClose, transaction } = useModal();

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent p="4" pb="8">
        <ModalHeader>{transaction.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack w="full" spacing="8">
            <ProgressBar status={transaction.status as IStatus} />

            <VStack w="full" spacing="4">
              <VStack spacing="0" w="full" align="flex-start">
                <Text fontSize="xs" color="pink.500">
                  Transferindo de
                </Text>
                <Text>{transaction.from}</Text>
              </VStack>
              <VStack spacing="0" w="full" align="flex-start">
                <Text fontSize="xs" color="pink.500">
                  Para
                </Text>
                <Text>{transaction.to}</Text>
              </VStack>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};
