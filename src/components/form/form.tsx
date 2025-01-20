import { useInput } from "@/hooks/useInput";

import s from "./form.module.sass";

const Form = () => {
  const [height, setHeight] = useInput();
  const [width, setWidth] = useInput();
  const [length, setLength] = useInput();


  return (
    <form className={s.form}>
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
    </form>
  );
};

export default Form;