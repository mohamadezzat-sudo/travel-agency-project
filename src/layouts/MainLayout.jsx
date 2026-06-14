import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '@/components';

export const MainLayout = () => {
  return (

<div className="flex flex-col min-h-screen">
  <Navbar className="navbar bg-base-100 shadow-sm" />
  <main className="container mx-auto px-4 py-8 mb-auto">
    <Outlet />
  </main>
  <Footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10" />
</div>
  );
};