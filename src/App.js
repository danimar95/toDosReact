import React from "react";

// Components
import NavigationBar from "./components/Navbar/Navbar.jsx";
import DefaultCard from "./components/DefaultCard/DefaultCard.jsx";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <DefaultCard />
    </div>
  );
}

export default App;
