export interface InputErrorMSGProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function InputErrorMSG({
  children,
  ...props
}: InputErrorMSGProps): JSX.Element {
  return (
    <div className="block mb-2 text-sm text-red-500" {...props}>
      {children}
    </div>
  );
}

InputErrorMSG.displayName = "InputErrorMSG";
