import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";

function App() {
  const location = useLocation();

  // Reba niba turi kuri login cyangwa signup page
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/sign-up";

  return (
    <div>
      {!hideNavFooter && <Navbar />}
      <Outlet />
      {!hideNavFooter && <MyFooter />}
    </div>
  );
}

export default App;
