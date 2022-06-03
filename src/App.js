import Box from '@mui/material/Box';

import { Route, Switch, HashRouter } from "react-router-dom"
import IndexPage from './component/IndexPage/IndexPage';
import RentPages from './component/RentPages/RentPages';
import PageDetail from './component/PageDetail/PageDetail';
import SelectBar from './component/SelectBar/SelectBar';
import NavBar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <HashRouter>
      <Box
        sx={{
          width: "auto",
          minHeight: 950,
        }}>
        <Box fullWidth
          sx={{
            minHeight: 50
          }}>
          {/* Navbar here */}
          <NavBar />
        </Box>
        <Box fullWidth
          sx={{
            minHeight: 800,
            // backgroundColor: '#fcba03',
          }}>
          <Switch>
            <Route exact path='/' component={IndexPage} />
            <Route path='/RentPages' component={RentPages} />
            <Route path='/PageDetail' component={PageDetail} />
            <Route path='/Test/SelectBar' component={SelectBar} />
            <Route path='*'>Not Found. ERROR: 404</Route>
          </Switch>
        </Box>

        <Box fullWidth
          sx={{
            minHeight: 50
          }}>
          {/* Footer here */}
          <Footer/>
        </Box>
      </Box>
    </HashRouter>
  );
}

export default App;
