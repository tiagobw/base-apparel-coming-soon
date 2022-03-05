import siteLogo from '../images/logo.svg';

const Logo = () => {
  return (
    <img
      className="header__logo"
      src={siteLogo}
      alt='A pinkish circle on the left, on the right the words base apparel all in uppercase'
    />
  );
};

export default Logo;
