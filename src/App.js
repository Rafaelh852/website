import React, {useEffect,useState} from "react";
import Page from "./components/Page";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";



function App() {
  // Uninitialized state will cause Child to error out
  var [pages,setPage] = useState();
  
  useEffect(()=>{
    fetch("/Blog/index").then((res)=>res.json())
      .then((data)=> setPage(data.names));
  },[]);

  // don't render Child until `pages` is ready!
  return (
   <Page>
     <BrowserRouter>
        {pages &&<Routes blogPageURL={pages}/>}
     </BrowserRouter>
   </Page>
  );
}

export default App;
