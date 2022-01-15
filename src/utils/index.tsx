export const formatStatus = (string: string) => {
  if (string === "created") return "Solicitada";
  if (string === "processing") return "Processando";
  return "Concluída";
};
