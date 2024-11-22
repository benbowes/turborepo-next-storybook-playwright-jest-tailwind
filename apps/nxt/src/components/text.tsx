import clsx from "clsx";

type TextProps = {
  size?: "sm" | "base" | "lg" | "xl";
  variant?: "gray" | "white" | "dark" | "red";
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export default function Text({
  size = "base",
  variant = "gray",
  as = "p",
  className,
  style,
  children,
}: TextProps) {
  const Tag = as;

  const sizes = {
    sm: "text-sm leading-normal",
    base: " text-base leading-normal",
    lg: " text-lg md:text-2xl leading-relaxed",
    xl: "text-2xl md:text-3xl leading-relaxed",
  };

  const variants = {
    gray: "text-gray-600",
    white: "text-white",
    dark: "text-gray-900",
    red: "text-red-900",
  };

  return (
    <Tag
      className={clsx(sizes[size], variants[variant], className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
