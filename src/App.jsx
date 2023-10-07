import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import Salesinfo from "./Components/Salesinfo";
import TableData from "./Components/tabledata";


function App() {
  return (
    <>
      <Sidebar />
      <MainContent/>
      <Salesinfo/>
      <TableData/>
     
    </>
  );
}

export default App;
