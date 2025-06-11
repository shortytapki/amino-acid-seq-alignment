import { useEffect, useState } from "react";

import { Flex } from "@mantine/core";
import { useClipboard, useTextSelection } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";

import { SequencesForm, SeqList } from "./components";
import type { SequencesPair } from "./types";

const Main = () => {
  const [seqList, setSeqList] = useState<SequencesPair[]>([]);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const selection = useTextSelection();
  const clipboard = useClipboard();
  const selectedText = selection?.toString();

  const onAddPair = (p: SequencesPair) => {
    setSeqList((prev) => [...prev, { ...p, id: new Date().toISOString() }]);
  };

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId);
    if (!selectedText) return;

    const id = setTimeout(() => {
      clipboard.copy(selectedText.replace(/[\r\n]+/g, ""));

      const ntfId = notifications.show({
        message: "Текст скопирован в буфер обмена",
      });

      setTimeout(() => {
        notifications.hide(ntfId);
      }, 1000);
    }, 500);

    setTimeoutId(id);
  }, [selectedText]);

  return (
    <>
      <Flex direction="column" w="100%" maw={1080}>
        <SequencesForm onAddPair={onAddPair} />
        <SeqList list={seqList} wrap="wrap" />
      </Flex>
    </>
  );
};

export default Main;
