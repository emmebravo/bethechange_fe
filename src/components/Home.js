import { Link } from 'react-router-dom';

import { Divider, Grid, Typography } from '@mui/material';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} direction='column'>
        <Typography variant='h4' component='h4'>
          be(the)change
        </Typography>
        <Typography>
          round up your transactions and donate to mutual aid
        </Typography>
        <Divider />

        <Link
          to='/register'
          style={{
            width: '140px',
            borderRadius: '3px',
            letterSpacing: '1.5px',
          }}
        >
          Register
        </Link>
        <Link to='/login'>Log In</Link>
      </Grid>
      <Grid item xs={6} direction='column'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/006/916/149/large_2x/people-are-putting-money-in-the-donation-box-free-vector.jpg'
          alt='people putting money in donation box'
          style={{ width: '90%' }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
