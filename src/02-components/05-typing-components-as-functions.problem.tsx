import React from "react";

interface Props {
  className: string;
}

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
