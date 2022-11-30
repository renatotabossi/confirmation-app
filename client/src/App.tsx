import React from 'react';

import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

import CreateAccount from "./account/create/create-account"
import ChangePassword from './account/change/forgot_password';
import SignIn from "./account/login/login";

/*
 * tsrcc -> create template class
 * tsrsfc -> create template function
 */

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignIn />}/>
      <Route path="/create" element={<CreateAccount />}/>
      <Route path="/forgot" element={<ChangePassword />}/>
    </Routes>
    </Router>
  );
}

export default App;
