/*  
Author: Inder Pal
EmailId: inder39811@gmail.com
Date: 23 Aug 2022
WorkItem: Created index.js page
*/
// ChakraProvider - which will give CSS to all the routes
// BrowserRouter - for routing purposes
// Provider - provides store info to all children inside it i.e. App

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
);
