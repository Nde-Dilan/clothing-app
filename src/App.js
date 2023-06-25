import './App.css';
import HomePage from './pages/home-page/home-page.jsx'
import ShopPage from './pages/shop-page/shop-page.jsx'
import Header from './components/header/header';
import { Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <Header/>
      /*As long as one route matches is okay and you can stop there */
      <Switch>
      <Route exact path='/' component={HomePage}></Route>/*exact ,eans that the path should be exactly / before rendering */
      <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
