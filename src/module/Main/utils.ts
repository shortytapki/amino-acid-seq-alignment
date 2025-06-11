import { AcidGroups, GroupColors } from "./consts";
import type { Acid, AcidGroup } from "./types";

export const getColor = (char: Acid) => {
  for (const [group, chars] of Object.entries(AcidGroups)) {
    if (chars.includes(char)) return GroupColors[group as AcidGroup];
  }
};
