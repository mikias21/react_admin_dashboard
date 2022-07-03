import {
  BrowserRouter as Router,
  Routes,
  Route
}  from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


// Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

// data 
import { userInputs, productInputs } from "./form_source";

// dark mode scss
import "./style/dark.scss";

function App() {

  const{darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}/>
              <Route path="login" element={<Login />} />
              <Route path="users">
                <Route index element={<List />}/>
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Add new user"/>} />
              </Route>
              <Route path="product">
                <Route index element={<List />}/>
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Add new product"/>} />
              </Route>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
