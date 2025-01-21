import { FC } from "react";

import { useInput } from "@/hooks/useInput";
import { Box } from "@/models/models";
import { Button } from "@mui/base";

import s from "./form.module.sass";

interface FormProps {
  isLoading?: boolean;
  onSubmit: (box: Box) => void;
}


const Form: FC<FormProps> = ({ onSubmit, isLoading = false }) => {
  const [height, setHeight] = useInput();
  const [width, setWidth] = useInput();
  const [length, setLength] = useInput();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ height: Number(height), width: Number(width), length: Number(length) });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.row}>
        <label htmlFor="height">Height</label>
        <input className={s.input} value={height} onChange={setHeight} type="number" id="height" />
      </div>
      <div className={s.row}>
        <label htmlFor="width">Width</label>
        <input className={s.input} value={width} onChange={setWidth} type="number" id="width" />
      </div>
      <div className={s.row}>
        <label htmlFor="length">Length</label>
        <input className={s.input} value={length} onChange={setLength} type="number" id="length" />
      </div>
      <div className={s.control}>
        <Button disabled={isLoading} type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Form;