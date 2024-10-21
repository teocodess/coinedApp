// import React, { useState, useEffect } from "react";
import React from 'react';
import {Navbar, NewEntryForm, Footer} from '../src/sections/sections'


function App() {
  // const [showGoals, setShowGoals] = useState(false);

  // const toggleGoals = () => {
  //   setShowGoals(!showGoals);
  // };

  return (
    <div className="font-nunito">
      <Navbar/>
      <NewEntryForm />
      <Footer />
    </div>
  );
}

export default App;
