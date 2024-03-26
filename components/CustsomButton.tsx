"use client";
import { CustomedButtonProps } from "@/types";
import Image from "next/image";
const CustsomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomedButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custome-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
export default CustsomButton;
