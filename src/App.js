import './App.css';
import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ProductManager from './Components/ProductManager';
import FilmRequest from './Components/FilmRequest';
import Parameter from './Components/Parameter';
import Home from './Components/Home';
import Users from './Components/Users';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Nav from './Components/Nav';

const App = () => {

  const [userNum, setUserNum] = useState(Math.round(Math.random()*100));

  return (
  <Router>
    <Nav text={userNum} setText={setUserNum} />  
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users/:id">
          <Users />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/productManager">
          <ProductManager />
        </Route>
        <Route path="/films">
          <FilmRequest />
        </Route>
        <Route path="/parameter/:id">
          <Parameter />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
