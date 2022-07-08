import { useState } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { Typography } from '@mui/material';

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
    <div className='container' style={{ paddingTop: '12px' }}>
      <div className='row'>
        <div className='col s8 offset-s2'>
          <Link to='/' className='btn-flat waves-effect'>
            <i className='material-symbols-outlined left'>arrow_back</i> back
            home
          </Link>
          <div className='col s12'>
            <h4>Register to be part of BtC</h4>
            <Typography>
              <ArrowBackIosNewRoundedIcon />
              Already have an account? <Link to='/login'>Log in</Link>
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='name'
              name='name'
              value={register.name}
              onChange={handleRegister}
            />
            <input
              type='email'
              placeholder='email'
              name='email'
              value={register.email}
              onChange={handleRegister}
            />
            <input
              type='password'
              placeholder='password'
              name='password'
              value={register.password}
              onChange={handleRegister}
            />
            <input
              type='password'
              placeholder='confirm password'
              name='password2'
              value={register.password2}
              onChange={handleRegister}
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
