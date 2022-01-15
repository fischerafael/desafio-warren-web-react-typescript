import { Button, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainSection } from "../../components/Main";
import { Modal } from "../../components/Modal";
import { Select } from "../../components/Select";
import { Table } from "../../components/Table";
import { TextInput } from "../../components/TextInput";
import { options } from "../../data/data";
import { ITransactionResponse } from "../../data/interfaces";

const ALL_TRANSACTIONS =
  "https://warren-transactions-api.herokuapp.com/api/transactions";

export const PageTransactions = () => {
  const [textInput, setTextInput] = useState("");
  const [status, setStatus] = useState("");
  const [transRes, setTransRes] = useState<ITransactionResponse[]>([]);
  const [filteredByTitle, setFilteredByTitle] = useState<
    ITransactionResponse[]
  >([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const { filteredTransactions } = filterTransactionsByTitleAndByStatus(
        transRes,
        textInput,
        status
      );

      setFilteredByTitle(filteredTransactions);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [textInput, transRes, status]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(ALL_TRANSACTIONS);
        const data: ITransactionResponse[] = await res.json();
        setTransRes(data);
      } catch (e) {
        alert("Erro ao buscar dados");
      }
    })();
  }, []);

  const onReset = () => {
    setTextInput("");
    setStatus("");
  };

  return (
    <>
      <Header />
      <MainSection
        header={
          <HStack w="full" spacing="4" justify="space-between">
            <TextInput
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={options}
            />
            <Button onClick={onReset} w="full" maxW="24" colorScheme="pink">
              Resetar
            </Button>
          </HStack>
        }
        table={<Table transactions={filteredByTitle} />}
      />
      <Modal />
    </>
  );
};

const filterTransactionsByTitleAndByStatus = (
  transactions: ITransactionResponse[],
  title: string,
  status: string
) => {
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionLower = transaction.title.toLowerCase();
    const titleLower = title.toLowerCase();

    if (!title && !status) return transaction.title;

    if (!status) return transactionLower.includes(titleLower);

    return (
      transactionLower.includes(titleLower) && transaction.status === status
    );
  });

  return { filteredTransactions };
};
