import { ChangeEvent, useState } from "react";

export function useInput(): [string, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};
