import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="bg-gradient-to-r from-[#C9C0A5] to-[#2877b5] bg-clip-text text-transparent">{children}</h1>
  );
};

export default HText;