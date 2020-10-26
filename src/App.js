import React, { Fragment } from 'react';

import "./App.css"

import Header from "./components/header/header.jsx"
import Display from "./components/display/display.jsx"


const App = () => {
  return (
    <Fragment>
      <Header />
      <Display />
    </Fragment>
  )
}

export default App;