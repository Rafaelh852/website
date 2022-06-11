import React, {useEffect,useState} from "react";
import Page from "./components/Page";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-231703413-1";

ReactGA.initialize(TRACKING_ID);

function App() {
  

  // Uninitialized state will cause Child to error out
  var [pages,setPage] = useState();
  useEffect(()=>{
    fetch("/blog/index").then((res)=>res.json())
      .then((data)=> setPage(data.names));
  },[]);

useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    
  }, []);

  

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
