import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, Container, IconButton, useColorScheme } from "@mui/material";

import s from "./app.module.sass";
import Form from "./components/form/form";
import Scene, { BoxProps } from "./components/scene/scene";
import { useFetch } from "./hooks/useFetch";
import { Box as IBox } from "./models/models";

function App() {
  const { mode, setMode } = useColorScheme();
  const { data, runFetch, loading, error } = useFetch<BoxProps, IBox>("/api/box", (data) => { console.log(data); });

  if (!mode) return null;

  const handleChangeMode = function () {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  if (error) {
    console.error(error);
  }

  const handleSubmit = (box: IBox) => {
    runFetch(box);
  };

  return (
    <Container
      disableGutters
      sx={[
        (theme) => ({
          color: '#fff',
          backgroundColor: theme.palette.background.paper,
          height: '100vh'
        })
      ]}
    >
      <Box component={"header"} position={"fixed"} px={2}>
        <IconButton onClick={handleChangeMode}>
          {mode === 'light' && <LightModeOutlinedIcon />}
          {mode === 'dark' && <DarkModeOutlinedIcon />}
        </IconButton>
        <IconButton disabled>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
      <Box component={'main'} className={s.container}>
        <Box className={s.menu}>
          <Form onSubmit={handleSubmit} isLoading={loading} />
        </Box>
        <div className={s.scene}>
          <Scene indices={data?.indices} vertices={data?.vertices} />
        </div>
      </Box>
    </Container>
  );
}

export default App;
