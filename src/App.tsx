import s from "./app.module.sass";
import Form from "./components/form/form";

function App() {

  const handleSubmit = (box: Box) => {
    console.log(box);
  };

  return (
    <div className={s.container}>
      <div className={s.menu}><Form onSubmit={handleSubmit} /></div>
      <div className={s.scene}>scene</div>
    </div>
  );
}

export default App;
