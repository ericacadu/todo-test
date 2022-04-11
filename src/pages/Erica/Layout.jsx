import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-slate-200 py-20">
      <div className="mx-auto w-10/12  max-w-xl">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
