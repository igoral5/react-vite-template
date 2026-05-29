import type { ForwardedRef, InputHTMLAttributes } from "react";
import style from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: ForwardedRef<HTMLInputElement>;
  error?: string;
  value?: string;
  className: string;
}

export const Input = ({
  inputRef,
  error = "",
  value = "",
  className,
  ...props
}: InputProps) => {
  return (
    <label className={style.label}>
      <input className={className} ref={inputRef} {...props} value={value} />
      <span className={style.error}>{error || ""}</span>
    </label>
  );
};
