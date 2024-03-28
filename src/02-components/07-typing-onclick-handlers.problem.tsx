import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  // either works - below is v specific, solution will be allowed on any element
  // onClick: React.MouseEventHandler<HTMLButtonElement>
  onClick: React.MouseEventHandler;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
