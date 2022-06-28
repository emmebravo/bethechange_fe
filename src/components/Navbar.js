import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper orange'>
          <Link
            to='/'
            className='col s5 brand-logo center black-text'
            style={{ fontFamily: 'monospace' }}
          >
            <i
              className='material-symbols-outlined'
              style={{ fontSize: '60px', color: 'white' }}
            >
              diversity_1
            </i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
