export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor: string;
}

export function Label({
  children,
  htmlFor,
  ...props
}: LabelProps): JSX.Element {
  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-900"
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
}

Label.displayName = "Label";
