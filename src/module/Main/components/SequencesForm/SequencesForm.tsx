import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import type { SequencesPair } from "../../types";
import { AcidNamesValidationPattern, PatternError } from "../../consts";

interface SequencesFormProps {
  onAddPair: (p: SequencesPair) => void;
}

export const SequencesForm = ({ onAddPair }: SequencesFormProps) => {
  const { values, setFieldValue, errors, onSubmit, setValues } =
    useForm<SequencesPair>({
      mode: "controlled",
      initialValues: { sequenceA: "", sequenceB: "", id: "" },
      validate: {
        sequenceA: (value, values) => {
          if (value.length === 0) return "Обязательное поле";
          if (!AcidNamesValidationPattern.test(value)) return PatternError;
          return value.length === values.sequenceB.length
            ? null
            : "Длины значений должны совпадать";
        },
        sequenceB: (value, values) => {
          if (value.length === 0) return "Обязательное поле";
          if (!AcidNamesValidationPattern.test(value)) return PatternError;
          return value.length === values.sequenceA.length
            ? null
            : "Длины значений должны совпадать";
        },
      },
    });

  const { sequenceA, sequenceB } = values;

  const handleSubmit = (values: SequencesPair) => {
    onAddPair(values);
    setValues({ sequenceA: "", sequenceB: "" });
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <TextInput
        label="Последовательность А"
        value={sequenceA}
        placeholder="Прим: VLSPADKTNIK"
        error={errors.sequenceA}
        ff="monospace"
        onChange={(e) =>
          setFieldValue("sequenceA", e.target.value.toUpperCase())
        }
      />
      <TextInput
        label="Последовательность B"
        value={sequenceB}
        placeholder="Прим: VLSPADKTNIK"
        error={errors.sequenceB}
        ff="monospace"
        onChange={(e) =>
          setFieldValue("sequenceB", e.target.value.toUpperCase())
        }
        mb={12}
      />
      <Button type="submit">Сохранить</Button>
    </form>
  );
};
