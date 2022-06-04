import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          {/* <PrivateRoute exact path='dashboard' element={<Dashboard />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
