import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h4>be (the) change</h4>
      <p>a way to pay it forward and donating to</p>
      <p>mutual aids</p>
      <p>by simply rounding up your transactions</p>

      <div>
        <p>Register, add your bank acct, and we take care of the rest!</p>
        <Link to='/register'>Register</Link> <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Home;
