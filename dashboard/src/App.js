import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TopBar from "./components/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
}

export default App;
