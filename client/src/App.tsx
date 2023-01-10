import React from 'react';

import { Route, BrowserRouter as Router, Routes} from "react-router-dom";

import CreateAccount from "./account/create/create-account"
import ChangePassword from './account/change/forgot-password';
import SignIn from "./account/login/login";
import MainNavigation from './navigation/main-navigation';

/*
 * tsrcc -> create template class
 * tsrsfc -> create template function
 * rfc -> best function template
 */

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<SignIn />}/>
      <Route path="/create" element={<CreateAccount />}/>
      <Route path="/forgot" element={<ChangePassword />}/>
      <Route path="/navigation" element={<MainNavigation />}/>
    </Routes>
    </Router>
  );
}

export default App;
