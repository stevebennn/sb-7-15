import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Firebase from "./firebase/Firebase";
import { FirebaseContext } from "./firebase/FirebaseContext";
import { Global } from "./global";
// import * as serviceWorker from "./serviceWorker";

import "./styles/index.css";
const WithGlobalState = () => {
  const [state, setState] = React.useState({
    selected: "",
    saveName: "",
    items: []
  });
  return (
    <Global.Provider value={{ state, setState }}>
      <App />
    </Global.Provider>
  );
};
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <WithGlobalState />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
