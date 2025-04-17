import clsx from "clsx";
import { ReactNode, ElementType } from "react";

type ContainerProps = {
  children: ReactNode;
  element?: ElementType;
  classes?: { container?: string };
  size?: string;
} & React.HTMLAttributes<HTMLElement>;

type SizeMapProps = {
  [key: string]: string;
};

export default function Container({
  children,
  element: Tag = "div",
  classes,
  size = "lg",
  ...props
}: ContainerProps) {
  const sizeMap: SizeMapProps = {
    xs: "max-w-md",
    sm: "max-w-xl",
    md: "max-w-6xl",
    lg: "max-w-7xl",
  };

  const className = clsx("mx-auto p-4", sizeMap[size], classes?.container);

  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}
