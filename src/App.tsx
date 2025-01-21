import s from "./app.module.sass";
import Form from "./components/form/form";
import { useFetch } from "./hooks/useFetch";
import { Box } from "./models/models";

function App() {
  const { data, runFetch, loading } = useFetch<Box, Box>("/api/box", (data) => { console.log(data); });

  console.log(data);

  const handleSubmit = (box: Box) => {
    console.log(box);
    runFetch(box);
  };

  return (
    <div className={s.container}>
      <div className={s.menu}>
        <Form onSubmit={handleSubmit} isLoading={loading} />
      </div>
      <div className={s.scene}>scene</div>
    </div>
  );
}

export default App;
