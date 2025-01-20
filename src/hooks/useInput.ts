import { ChangeEvent, useState } from "react";

export function useInput(): [string, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] {
  const [value, setValue] = useState("0");
  const minValue = 0;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = Number(e.target.value);

    if (value < minValue) {
      value = minValue;
    }

    setValue(value.toString());
  };

  return [value, onChange];
};
