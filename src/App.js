import Box from '@mui/material/Box';

import { Route, Switch, HashRouter } from "react-router-dom"
import IndexPage from './component/IndexPage/IndexPage';
import RentPages from './component/RentPages/RentPages';
import PageDetail from './component/PageDetail/PageDetail';
import SelectBar from './component/SelectBar/SelectBar';
import NavBar from './component/Navbar/Navbar';
import SignUp from "./component/SignUp/signup";
import SignIn from "./component/SignIn/signin";
import Footer from './component/Footer/Footer';
import AddRentPages from './component/AddRentPages/AddRentPages';

import cityCountyData from './data/CityCountyData.json';
const cityData = Object.fromEntries(cityCountyData.map((city) => [city.CityName, city.AreaList]))

function App() {
  return (
    <HashRouter>
      <Box
        sx={{
          width: "auto",
          minHeight: "100vh",
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
            <Route exact path='/RentPages' component={RentPages} />
            <Route exact path='/AddRentPages' >
              <AddRentPages cityData={cityData} />
            </Route>
            <Route exact path='/PageDetail/:id' component={PageDetail} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route path='*'>Not Found. ERROR: 404</Route>
          </Switch>
        </Box>

        <Box fullWidth
          sx={{
            minHeight: 50
          }}>
          {/* Footer here */}
          <Footer />
        </Box>
      </Box>
    </HashRouter>
  );
}

export default App;
