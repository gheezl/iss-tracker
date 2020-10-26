import React, { Fragment } from 'react';

import "./App.css"

import Header from "./components/header/header.jsx"
import Display from "./components/display/display.jsx"
import Background from "./components/background/background.jsx"


const App = () => {
  return (
    <Fragment>
      <Background />
      <Header />
      <Display />
    </Fragment>
  )
}

export default App;