export interface ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}

Button.displayName = "Button";
