import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";  


function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;