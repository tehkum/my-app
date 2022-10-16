import "./App.css";
import React, { useState }from "react";
import Details from "./components/viewer/Details";
import InputViewer from "./components/input/InputViewer";


function App(props) {
  var [dummyDetails, setDummyDetails] = useState([]);
  
  function userInfoHandler(userData){
    setDummyDetails((prevUserData) => {
      return[userData, ...prevUserData];
    });
    console.log(userData);
  }

  return(
    <div className="App">
      <InputViewer onSelectData={userInfoHandler}/>     
      <div className="main-box">
        <Details items={dummyDetails}/>
      </div>
    </div>
  );
}
export default App;
