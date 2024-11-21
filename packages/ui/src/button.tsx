export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button className="text-3xl font-bold underline" type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
