import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import DoYouDare from './Components/DoYouDare/DoYouDare'
import Homepage from './Pages/HomePage/HomePage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-brands-svg-icons'
import { faSlidersH,faHouseUser,faUserLock,faRupeeSign ,faMinus,faPlus,faTrashAlt,faBars,faShoppingCart, faUsers, faArrowLeft, faBed, faBath, faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import SignInPage from './Pages/SignInPage/SignInPage';

library.add(faBars,faUsers,faArrowLeft,faBed,faBath,faDoorOpen,faUserLock)

function App() {
  return (
    <div className="App">
      <Router>
      <DoYouDare/>
      <Switch>
        <Route path='/' exact>
          <Homepage/>
        </Route>
        <Route path='/SignInPage' exact>
          <SignInPage/>
        </Route>
        <Route path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
