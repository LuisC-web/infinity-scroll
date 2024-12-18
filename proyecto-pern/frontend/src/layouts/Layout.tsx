import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className=" bg-slate-800 p-3">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="text-4xl font-extrabold text-white text-center">
            Administrador de productos
          </h1>
        </div>
      </header>
      <main className="mt-10 p-10 mx-auto max-w-6xl bg-white shadow-xl">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
