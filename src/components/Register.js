import { useState } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography, Input, Button } from '@mui/material';

const Register = () => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleRegister = (event) => {
    const { name, value } = event.target;
    setRegister((prevRegister) => ({
      ...prevRegister,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //submitToAPI()
    console.log(register);
  };

  return (
    <div>
      <ArrowBackIosNewRoundedIcon />
      <Link to='/'> back home</Link>
      <div>
        <Typography variant='h4'>Register to be (the) change</Typography>
        <Typography>
          Already have an account? <Link to='/login'>Log in</Link>
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='name'
          name='name'
          value={register.name}
          onChange={handleRegister}
        />
        <Input
          type='email'
          placeholder='email'
          name='email'
          value={register.email}
          onChange={handleRegister}
        />
        <Input
          type='password'
          placeholder='password'
          name='password'
          value={register.password}
          onChange={handleRegister}
        />
        <Input
          type='password'
          placeholder='confirm password'
          name='password2'
          value={register.password2}
          onChange={handleRegister}
        />
        <Button>submit</Button>
      </form>
    </div>
  );
};

export default Register;
