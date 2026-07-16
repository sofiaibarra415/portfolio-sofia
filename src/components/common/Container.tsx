import React from "react";

type ContainerProps = {
  id: string;
  children: React.ReactNode;
};

export default function Container({ id, children }: ContainerProps) {
  return (
    <div
      id={id}
      className="min-h-screen w-full scroll-mt-24 flex justify-center items-center py-24 md:py-32 px-6 md:px-12 2xl:px-24"
    >
      <div className="max-w-7xl w-full mx-auto">{children}</div>
    </div>
  );
}
