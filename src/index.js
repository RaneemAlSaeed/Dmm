import React from "react";
import ReactDom from "react-dom";
import i18n from "./i18n";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { store } from "./store/store";
import { Provider } from "react-redux";
// import { theme } from "./Styles";
// import { ThemeProvider } from "@mui/material/styles";
ReactDom.render(

    <Provider store={store}>
      <App />
    </Provider>
 ,

  document.getElementById("root")
);
