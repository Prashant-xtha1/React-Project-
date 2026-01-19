import type React from "react";
import { type Control, type FieldValues, type Path } from "react-hook-form";

export interface IInputProps<T extends FieldValues> {
  name: Path<T>,
  placeholder?: string,
  type?: React.HTMLInputTypeAttribute,
  control: Control<T>,
  errMsg?: string,
}

export interface IGeneralInput {
  name: string,
  placeholder?: string,
  // eslint-disable-next-line
  handler: any
}

export interface IFormInputProps extends IGeneralInput {
  type?: string
}
