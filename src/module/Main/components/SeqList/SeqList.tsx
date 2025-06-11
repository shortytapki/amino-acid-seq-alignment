import { Box, Flex, type FlexProps } from "@mantine/core";

import { SequencesPairUI } from "../SequencesPair/SequencesPair";
import type { SequencesPair } from "../../types";

interface SeqListProps extends FlexProps {
  list: SequencesPair[];
}

export const SeqList = ({
  list,
  gap = 16,
  direction = "column",
  ...rest
}: SeqListProps) => {
  return (
    <Flex component="ol" pl={4} direction={direction} gap={gap} {...rest}>
      {list.map((pair) => {
        return (
          <Box
            key={pair.id}
            component="li"
            bd="2px solid black"
            p={4}
            maw="100%"
            style={{
              wordBreak: "break-word",
              overflowWrap: "anywhere",
              whiteSpace: "pre-wrap",
            }}
          >
            <SequencesPairUI pair={pair} />
          </Box>
        );
      })}
    </Flex>
  );
};
