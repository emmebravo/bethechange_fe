import { AppBar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: 'darkorange', padding: '1rem 2rem' }}>
      <Box component='nav'>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          HELLO
        </Link>
      </Box>
    </AppBar>
  );
};

export default Navbar;
