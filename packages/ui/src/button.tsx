export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button
      className="px-5 py-2 transition-colors duration-200 bg-blue-400 text-slate-100 font-bold rounded-xl hover:bg-slate-300 hover:text-slate-600"
      type="button"
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = "Button";
