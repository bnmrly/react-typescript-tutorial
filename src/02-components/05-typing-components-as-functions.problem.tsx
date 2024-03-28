import React from "react";

interface Props {
  className: string;
}

// React.FC is a generic type that takes Props as a type argument

export const Button: React.FC<Props> = (props: Props) => {
  // error would be thrown here
  // return {
  //   ohDear: "123",
  // };

  return <div>Hello World</div>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
