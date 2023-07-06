import * as React from "react";
import { Avatar, Input, Stack, Typography } from "@mui/joy";
import { ValueEditor } from "../shared/molecules/ValueEditor";
import { ChangeEvent } from "react";

interface QuantityCardProps {
  onIncrement(): void;
  onDecrement(): void;
  quantityValue: number | null | undefined;
  onInputChange(event: ChangeEvent<HTMLInputElement>): void;
  unit: string | undefined;
  imgSrc: string | undefined;
}
export function QuantityCard({
  onIncrement,
  onDecrement,
  quantityValue,
  onInputChange,
  unit,
  imgSrc,
}: QuantityCardProps) {
  return (
    <Stack
      alignItems="center"
      width={"fit-content"}
      maxHeight={300}
      alignSelf={"center"}
    >
      <img src={imgSrc} alt="A beautiful landscape." />

      <ValueEditor onIncrement={onIncrement} onDecrement={onDecrement}>
        <Input
          type="number"
          value={quantityValue!}
          onChange={onInputChange}
          endDecorator={<Typography>{unit}</Typography>}
        />
      </ValueEditor>
    </Stack>
  );
}
