import { useDisclosure } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useState } from "react";
import { ITransactionResponse } from "../data/interfaces";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onModalOpen: (transaction: ITransactionResponse) => void;
  transaction: ITransactionResponse;
  setTransaction: (transaction: ITransactionResponse) => void;
}

const ModalContext = createContext({} as Props);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [transaction, setTransaction] = useState({} as ITransactionResponse);

  const onModalOpen = (transaction: ITransactionResponse) => {
    setTransaction(transaction);
    onOpen();
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, onClose, onModalOpen, transaction, setTransaction }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  return useContext(ModalContext);
};

export { ModalProvider, useModal };
