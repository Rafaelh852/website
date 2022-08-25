import React, {useEffect,useState} from "react";
import Page from "./components/Page";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";

/*
import ReactGA from "react-ga";
const TRACKING_ID = "UA-231703413-1";
ReactGA.initialize(TRACKING_ID);
*/
function App() {

 /*
   useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
 */ 


  // Uninitialized state will cause Child to error out
  var [pages,setPage] = useState();
  
  // use for production
  const pa = "/index";

  //use for development
  //const pa = "/blog/index";

  useEffect(()=>{
    fetch(pa).then((res)=>res.json())
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
