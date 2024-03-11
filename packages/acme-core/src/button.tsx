export interface ButtonProps
  extends Exclude<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

Button.displayName = "Button";
