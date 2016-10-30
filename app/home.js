import React from 'react';
import { Link } from 'react-router';
import Logo from './components/logo';

let Home = () => (
  <div className="container">
    <Logo />
    <div class="">
      <h1>You're not just a resume!</h1>
      <h3>Show recruiters at Company that you’ve got the skills they want.</h3>
      <button><Link to="/signup">Sign up now</Link></button>
    </div>
  </div>
);

export default Home;
