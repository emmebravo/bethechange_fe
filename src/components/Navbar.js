import { AppBar, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: 'darkorange', padding: '1rem 2rem' }}>
      <Container>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
          HELLO
        </Link>
      </Container>
    </AppBar>
  );
};

export default Navbar;
