import { Outlet } from "react-router";
import navbar from "../Components/navbar";
import Footer from "../Components/Footer";
const MainLayout = () => {
  return (
    <>
      <navbar/>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;