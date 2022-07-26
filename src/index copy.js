import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/motion.css";
import "./styles/Global.css";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
);