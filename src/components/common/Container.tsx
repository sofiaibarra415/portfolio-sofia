import React from "react";

type ContainerProps = {
  id: string;
  children: React.ReactNode;
};

export default function Container({ id, children }: ContainerProps) {
  return (
    <div
      id={id}
      className="min-h-[calc(100vh-6rem)] w-full scroll-mt-24 flex justify-center items-center"
    >
      {children}
    </div>
  );
}
