import s from "./app.module.sass";
import Form from "./components/form/form";

function App() {
  return (
    <div className={s.container}>
      <div className={s.menu}><Form /></div>
      <div className={s.scene}>scene</div>
    </div>
  );
}

export default App;
