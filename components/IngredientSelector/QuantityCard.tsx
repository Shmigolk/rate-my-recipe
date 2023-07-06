import * as React from "react";
import { Input, Stack, Typography } from "@mui/joy";
import { ValueEditor } from "../shared/molecules/ValueEditor";
import { ChangeEvent } from "react";
import { ImagePlaceholder } from "@/components/shared/atoms/ImagePlaceholder";

interface QuantityCardProps {
  onIncrement(): void;
  onDecrement(): void;
  quantityValue: number | null | undefined;
  onInputChange(event: ChangeEvent<HTMLInputElement>): void;
  unit: string | undefined;
  imgSrc: string | undefined;
  title: string | undefined;
}
export function QuantityCard({
  onIncrement,
  onDecrement,
  quantityValue,
  onInputChange,
  unit,
  imgSrc,
  title,
}: QuantityCardProps) {
  return (
    <Stack alignItems="center" width={"fit-content"} alignSelf={"center"}>
      <Typography component={"h1"} fontSize={"x-large"}>
        {title}
      </Typography>
      {imgSrc ? (
        <img
          src={imgSrc}
          alt="A beautiful landscape."
          style={{ maxHeight: "70vh" }}
        />
      ) : (
        <ImagePlaceholder placeholderText={"No image sorry"} />
      )}

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
