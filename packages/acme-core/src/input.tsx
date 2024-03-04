import { HtmlHTMLAttributes } from "react";

export default function Input({ autoFocus, ...props }: InputProps) {
  return <input autoFocus={autoFocus} {...props} />;
}

export interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  autoFocus?: boolean;
}
