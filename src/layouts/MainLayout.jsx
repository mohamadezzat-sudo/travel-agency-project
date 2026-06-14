import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '@/components'; 

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};