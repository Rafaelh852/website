//import './App.css';

import React from "react";
import Page from "./components/Page";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
   <Page>
     <BrowserRouter>
        <Routes />
     </BrowserRouter>
   </Page>
  );
}

export default App;
