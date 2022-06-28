import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container valign-wrapper'>
      <div className='row'>
        <div className='col s12 center-align'>
          <h4>be(the)change</h4>
          <p className='flow-text grey-text text-darken-1'>
            round up your transactions and donate to mutual aid
          </p>
          <br />
          <div className='col s6'>
            <Link
              to='/register'
              style={{
                width: '140px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
              }}
              className='btn btn-large waves-effect waves-light hoverable orange accent-3'
            >
              Register
            </Link>
          </div>
          <div className='col s6'>
            <Link
              to='/login'
              style={{
                width: '140px',
                borderRadius: '3px',
                letterSpacing: '1.5px',
              }}
              className='btn btn-large btn-flat waves-effect white black-text'
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
