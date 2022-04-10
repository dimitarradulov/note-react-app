import './Header.css';

const Header = () => {
  const url = '#';

  return (
    <div className="header">
      <a className="logo" href={url}>
        Note<span className="logo__colored">Me</span>
      </a>
    </div>
  );
};

export default Header;
