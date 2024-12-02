export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  hasError?: boolean;
}

export function Input({ id, hasError, ...props }: InputProps): JSX.Element {
  const classNames = `bg-gray-50 border ${!hasError ? "border-gray-400" : "border-red-500"} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`;

  return <input className={classNames} id={id} type="text" {...props} />;
}

Input.displayName = "Input";
