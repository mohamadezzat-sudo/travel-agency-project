import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer sm:footer-horizontal bg-neutral text-neutral-content p-10'>
      <nav>
        <h6 className='footer-title'>Services</h6>
        <Link className='link link-hover' to='/branding'>Branding</Link>
        <Link className='link link-hover' to='/design'>Design</Link>
        <Link className='link link-hover' to='/marketing'>Marketing</Link>
      </nav>
      <nav>
        <h6 className='footer-title'>Company</h6>
        <Link className='link link-hover' to='/about'>About us</Link>
        <Link className='link link-hover' to='/contact'>Contact</Link>
      </nav>
      {/* ... keep your other links here ... */}
    </footer>
  );
};
