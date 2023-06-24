import './App.css';
import HomePage from './pages/home-page/home-page.jsx'

import { Switch,Route } from 'react-router-dom';

const HatsPage = ()=>{
  <div className="">
    <h1>Hats Page</h1>
  </div>
}
function App() {
  return (
    <div >
      /*As long as one route matches is okay and you can stop there */
      <Switch>
      <Route exact path='/' component={HomePage}></Route>/*exact ,eans that the path should be exactly / before rendering */
      <Route exact path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );  
}

export default App;
