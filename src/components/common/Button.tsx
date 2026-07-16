import React from "react";

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={(e) => onClick(e)}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-iris to-spring text-bg font-display font-medium transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {label}
    </button>
  );
}
