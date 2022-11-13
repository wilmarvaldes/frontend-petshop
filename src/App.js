import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/auth/Login';
import CrearCuenta from './pages/auth/crearcuenta';
import Home from './pages/Home';

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/home" exact element={<Home/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
