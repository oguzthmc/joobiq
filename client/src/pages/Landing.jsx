import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.png';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="joobiq" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Welcome to Joobiq, your ultimate job tracking app designed to help
            you manage and streamline your job search process with ease and
            efficiency.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
