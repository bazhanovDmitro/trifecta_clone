import Header from "./Layouts/Header/index";
import { Outlet } from "react-router-dom";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
