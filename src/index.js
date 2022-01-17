import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/stores";
import storeToolkit from "./redux-toolkit/features/storeToolkit";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={storeToolkit}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
