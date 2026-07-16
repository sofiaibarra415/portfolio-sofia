import React from "react";

type InputProps = {
  type: "email";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Input({
  type,
  placeholder,
  onChange,
  value,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-bg-surface border border-border rounded-full py-3 pl-5 pr-4 text-ink min-w-[280px] sm:min-w-[320px] outline-none caret-iris placeholder:text-ink-faint focus-visible:ring-2 focus-visible:ring-iris transition-shadow"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      value={value}
    />
  );
}
