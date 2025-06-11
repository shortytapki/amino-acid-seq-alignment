export type Acid =
  | "A"
  | "R"
  | "N"
  | "D"
  | "C"
  | "E"
  | "Q"
  | "G"
  | "H"
  | "I"
  | "L"
  | "K"
  | "M"
  | "F"
  | "P"
  | "S"
  | "T"
  | "W"
  | "Y"
  | "V";

export type AcidGroup =
  | "cysteine"
  | "hydrophobic"
  | "glycine"
  | "negativelyCharged"
  | "positivelyCharged"
  | "polar";

export type SequencesPair = {
  sequenceA: string;
  sequenceB: string;
  id: string;
};
