import {Link} from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className='navbar bg-base-200 shadow-sm'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost text-xl'>
          Travel
        </Link>
      </div>
      <div className='navbar-end'>
        <ul className='menu menu-horizontal items-baseline gap-2'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/destinations'>Destinations</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

