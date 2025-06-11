import { Text } from "@mantine/core";
import type { Acid, SequencesPair } from "../../types";
import { getColor } from "../../utils";

interface SequencePairUIProps {
  pair: SequencesPair;
  blockSize?: number;
}

export const SequencesPairUI = ({
  pair: { sequenceA, sequenceB },
  blockSize = 40,
}: SequencePairUIProps) => {
  const blocks = [];

  for (let i = 0; i < sequenceA.length; i += blockSize) {
    blocks.push({
      top: sequenceA.slice(i, i + blockSize),
      bottom: sequenceB.slice(i, i + blockSize),
    });
  }

  return (
    <>
      {blocks.map((block, i) => (
        <>
          <div key={i}>
            <Text lh={2} ff="monospace">
              {block.top.split("").map((char) => (
                <Text
                  key={`A-${char}`}
                  p={8}
                  component="span"
                  bg={getColor(char as Acid)}
                >
                  {char}
                </Text>
              ))}
            </Text>
            <br />
            <Text lh={2} ff="monospace">
              {block.bottom.split("").map((char, idx) => {
                const isDiff = char !== sequenceA[idx];
                const color = isDiff ? getColor(char as Acid) : "";
                return (
                  <Text key={`B-${char}`} component="span" p={8} bg={color}>
                    {char}
                  </Text>
                );
              })}
            </Text>
            <br />
          </div>
        </>
      ))}
      {/* {charsA.map((char) => (
          <Text
            key={`A-${char}`}
            p={8}
            component="span"
            bg={getColor(char as Acid)}
          >
            {char}
          </Text>
        ))}
      </Text>
      <Text mb={8} p={8} ff="monospace" lh={2}>
        {charsB.map((char, idx) => {
          const isDiff = char !== sequenceA[idx];
          const color = isDiff ? getColor(char as Acid) : "";
          return (
            <Text key={`B-${char}`} component="span" p={8} bg={color}>
              {char}
            </Text>
          );
        })} */}
    </>
  );
};
