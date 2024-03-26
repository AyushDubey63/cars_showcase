import React, { MouseEventHandler } from "react";

export interface CustomedButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manuFacturer: string;
  setManuFacturer: (manuFacturer: string) => void;
}
