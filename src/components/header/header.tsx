import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton, useColorScheme } from "@mui/material";

const Header = () => {
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
    <Box component={"header"} position={"fixed"} px={2} sx={{ pointerEvents: 'none' }}>
      <IconButton onClick={handleChangeMode} sx={{ pointerEvents: 'all' }}>
        {mode === 'light' && <LightModeOutlinedIcon />}
        {mode === 'dark' && <DarkModeOutlinedIcon />}
      </IconButton>
      <IconButton disabled sx={{ pointerEvents: 'all' }}>
        <SettingsOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Header;
