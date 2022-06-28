import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className='container' style={{ paddingTop: '12px' }}>
      <div className='row'>
        <div className='col s8 offset-s2'>
          <Link to='/' className='btn-flat waves-effect'>
            <i className='material-symbols-outlined left'>arrow_back</i> back
            home
          </Link>
          <div className='col s12'>
            <h4>Login to BtC</h4>
            <p className='grey-text text-darken-1'>
              Do not have an account? <Link to='/register'>Register</Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='email'
              name='email'
              value={login.email}
              onChange={handleLogin}
            />
            <input
              type='password'
              placeholder='password'
              name='password'
              value={login.password}
              onChange={handleLogin}
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
