import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import { useState } from "react";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(true);
  const updateValue = (userLogged) => {
    setIsUserLogged(userLogged);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isUserLogged ? (
                <Home onUpdateValue={updateValue} />
              ) : (
                <Navigate to="/auth" />
              )
            }
          />

          <Route path="/auth" element={<Auth onUpdateValue={updateValue} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
