import s from "./app.module.sass";
import Form from "./components/form/form";
import Scene, { BoxProps } from "./components/scene/scene";
import { useFetch } from "./hooks/useFetch";
import { Box } from "./models/models";

function App() {
  const { data, runFetch, loading, error } = useFetch<BoxProps, Box>("/api/box", (data) => { console.log(data); });

  if (error) {
    console.error(error);
  }

  const handleSubmit = (box: Box) => {
    console.log(box);
    runFetch(box);
  };

  return (
    <div className={s.container}>
      <div className={s.menu}>
        <Form onSubmit={handleSubmit} isLoading={loading} />
      </div>
      <div className={s.scene}>
        <Scene indices={data?.indices} vertices={data?.vertices} />
      </div>
    </div>
  );
}

export default App;
