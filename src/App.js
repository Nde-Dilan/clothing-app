import './App.css';
import HomePage from './pages/home-page/home-page.jsx'
import ShopPage from './pages/shop-page/shop-page.jsx'
import Header from './components/header/header';
import SignInAndUp from './pages/sign-in-and-up/sign-in-and-up';

import { Switch,Route } from 'react-router-dom';
//msyaomarket

function App() {
  return (
    <div >
      <Header/>
      /*As long as one route matches is okay and you can stop there */
      <Switch>
      <Route exact path='/' component={HomePage}></Route>/*exact means that the path should be exactly / before rendering */
      <Route exact path='/shop' component={ShopPage}></Route>
      <Route exact path='/signin' component={SignInAndUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
//npm i react-router-dom && --package-lock-only && node-sass
