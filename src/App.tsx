
import { Box, Container } from "@mui/material";

import s from "./app.module.sass";
import Form from "./components/form/form";
import Header from "./components/header/header";
import Scene, { BoxProps } from "./components/scene/scene";
import { useFetch } from "./hooks/useFetch";
import { Box as IBox } from "./models/models";

function App() {
  const { data, runFetch, loading, error } = useFetch<BoxProps, IBox>("/api/box", (data) => { console.log(data); });

  if (error) {
    console.error(error);
  }

  const handleSubmit = (box: IBox) => {
    runFetch(box);
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={[
        (theme) => ({
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
          height: '100vh'
        })
      ]}
    >
      <Header />
      <Box component={'main'} className={s.container}>
        <Box className={s.menu}>
          <Form onSubmit={handleSubmit} isLoading={loading} />
        </Box>
        <Box
          className={s.scene}
          sx={[
            (theme) => ({
              backgroundColor: theme.palette.background.paper
            })
          ]}
        >
          <Scene indices={data?.indices} vertices={data?.vertices} />
        </Box>
      </Box>
    </Container>
  );
}

export default App;

