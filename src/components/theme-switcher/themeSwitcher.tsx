import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton, useColorScheme } from "@mui/material";

const ThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const handleChangeMode = function () {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  };

  return (
    <IconButton onClick={handleChangeMode}>
      {mode === 'light' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  );
};

export default ThemeSwitcher;