import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="relative flex flex-col justify-center w-5/6 md:w-3/4 lg:w-1/2 m-auto h-screen">
      <Outlet />
    </main>
  );
};

export default Layout;
