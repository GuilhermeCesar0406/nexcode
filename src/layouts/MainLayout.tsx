import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout() {
  return (
    <>
      <Navbar />

      <div>
        <Sidebar />

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default MainLayout;