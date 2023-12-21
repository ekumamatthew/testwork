import React from "react";
import "./App.css";
import UserSystem from "../src/components/functions/UsersSystem";
import { initialUsers } from "./components/data/data";

function App() {
  return (
    <div className="App">
      <h1>User Management System</h1>
      <UserSystem initialUsers={initialUsers} />
    </div>
  );
}

export default App;
