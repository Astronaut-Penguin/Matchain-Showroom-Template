// React Imports
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// Styles Imports
import './App.css';
import Banner from "./components/Banner/Banner";

//Container Import
import HomePage from "./page/Home/HomePage";

// CAMBIAR DONDE DICE HOMEPAGE EN RENDER CON CONTENT

function App() {
  return (
    <HashRouter>
    <Switch>
      <Route exact path="/">
        <HomePage/>
      </Route>
      <Route exact strict path="/content" render={() => <HomePage />} />
    </Switch>
  </HashRouter>
  );
}

export default App;