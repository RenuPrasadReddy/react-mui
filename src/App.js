import './App.css';
import LeftPanel from './components/leftpanel/LeftPanel';
import RightPanel from './components/rightpanel/RightPanel';
import { Grid, Divider } from '@material-ui/core';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
