import React, { ComponentProps } from "react";

// can use ComponentProps, which is nicer but can also use React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  className,
  ...rest
}: // }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
