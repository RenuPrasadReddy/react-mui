import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Dashboard() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <FormControlLabel
        control={
          <Switch
            checked={darkState}
            onChange={handleThemeChange}
            name="Toggle Theme"
          />
        }
        label="Toggle Theme"
      />
      <h1 style={{textAlign:'center'}}> Hello World </h1>
    </ThemeProvider>
  );
}