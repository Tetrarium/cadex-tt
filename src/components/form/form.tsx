import { Input } from "@mui/base";

import s from "./form.module.sass";

const Form = () => {
  return (
    <form>
      <div className={s.row}>
        <label htmlFor="height">Height</label>
        <Input type="number" id="height" />
      </div>
      <div className={s.row}>
        <label htmlFor="width">Width</label>
        <Input type="number" id="width" />
      </div>
      <div className={s.row}>
        <label htmlFor="length">Length</label>
        <Input type="number" id="length" />
      </div>
    </form>
  );
};

export default Form;