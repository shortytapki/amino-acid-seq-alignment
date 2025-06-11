import type { Acid, AcidGroup } from "./types";

export const AcidGroups: Record<AcidGroup, Acid[]> = {
  cysteine: ["C"],
  hydrophobic: ["A", "I", "L", "M", "F", "W", "Y", "V", "P"],
  glycine: ["G"],
  negativelyCharged: ["D", "E"],
  positivelyCharged: ["K", "R"],
  polar: ["S", "T", "H", "Q", "N"],
};

export const GroupColors: Record<AcidGroup, string> = {
  cysteine: "#ffea00",
  hydrophobic: "#67e4a6",
  glycine: "#c4c4c4",
  negativelyCharged: "#fc9cac",
  positivelyCharged: "#bb99ff",
  polar: "#80bfff",
};

export const AcidNamesValidationPattern = /^[ARNDCEQGHILKMFPSTWYV-]*$/;

export const PatternError =
  "Можно использовать только символы: A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V и дефис";
