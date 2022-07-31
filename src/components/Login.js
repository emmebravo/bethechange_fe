import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@mui/material';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //submitToAPI()
    console.log(login);
  };

  return (
    <div>
      <ArrowBackIosNewRoundedIcon />
      <Button to={'/'} component={Link}>
        back home
      </Button>
      <div>
        <h4>Login to BtC</h4>
        <p>
          Do not have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type='email'
          placeholder='email'
          name='email'
          value={login.email}
          onChange={handleLogin}
        />
        <Input
          type='password'
          placeholder='password'
          name='password'
          value={login.password}
          onChange={handleLogin}
        />
        <Button>submit</Button>
      </form>
    </div>
  );
};

export default Login;
