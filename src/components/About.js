import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Humberger from './Humberger';
import SideBar from './Sidebar';

import '../styles/about.css';

const AboutInfo = ({ title, text }) => (
  <>
    <h1>{title}</h1>
    <p>{text}</p>
  </>
);

AboutInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const About = () => {
  const location = useLocation();
  const aboutApp = location.pathname.includes('about-app');
  const aboutAuthor = location.pathname.includes('about-author');

  return (
    <div className="container">
      <Humberger />
      <SideBar />
      <div className="links">
        <p><Link className="link" to="/about/about-app">About App</Link></p>
        <p><Link className="link" to="/about/about-author">About Author</Link></p>
      </div>
      <div className="about">
        {aboutApp ? <AboutInfo title="About the App" text="some text" /> : ''}
        {aboutAuthor ? <AboutInfo title="About the Author" text="some text" /> : ''}
      </div>
    </div>
  );
};
export default About;
