
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, IconButton } from "@mui/material";

import ThemeSwitcher from "../theme-switcher/themeSwitcher";

const Header = () => {
  return (
    <Box component={"header"} position={"fixed"} px={2}>
      <ThemeSwitcher />
      <IconButton disabled>
        <SettingsOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default Header;
