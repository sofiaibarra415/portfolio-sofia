import React from "react";

type TitlesProps = {
  title: string;
  subtitle: string;
};

export default function Titles({ title, subtitle }: TitlesProps) {
  return (
    <div className="text-center">
      <h2 className="text-xl text-blue font-extrabold">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
