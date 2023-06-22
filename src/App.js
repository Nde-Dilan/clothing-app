import './App.css';
import HomePage from './pages/home-page/home-page.jsx'

import { Route } from 'react-router-dom';

const HatsPage = ()=>{
  <div className="">
    <h1>Hats Page</h1>
  </div>
}
function App() {
  return (
    <div >
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/hats' component={HatsPage}></Route>

    </div>
  );  
}

export default App;
