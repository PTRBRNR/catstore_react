import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import CatStore from "./pages/CatStore";
import Main from "./components/Main";
import Home from "./pages/Home";
import CatFarm from "./pages/CatFarm";

const Layout = () => (
  <div className="container">
    <NavBar />
    <Main>
      <Outlet />
    </Main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="cat-store" element={<CatStore />} />
          <Route path="cat-farm" element={<CatFarm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
