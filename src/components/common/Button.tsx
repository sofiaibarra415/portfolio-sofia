import React from "react";

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={(e) => onClick(e)}
      style={{
        background: "linear-gradient(to right, #7AAEEA, #7AEABB)",
        color: "white",
      }}
      className="p-3 rounded-3xl"
    >
      {label}
    </button>
  );
}
