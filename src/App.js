import './App.css';
import LeftPanel from './components/leftpanel/LeftPanel';
import RightPanel from './components/rightpanel/RightPanel';
import { Grid, Divider,Paper, CssBaseline  } from '@material-ui/core';
import Header from './components/header/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';


function App() {

  const darkMode = useSelector(state => state.toggleReducer.mode);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : "light"
    }
  })

  return (

    <ThemeProvider theme={theme}>
       <CssBaseline />
      <Paper style={{height: "100vh"}}>
        <Header />
        <Grid container>
          <Grid item md={4}>
            <LeftPanel />
          </Grid>
          {/* <Divider orientation="vertical" variant="fullWidth" flexItem/> */}
          <Grid item md={8}>
            <RightPanel />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
