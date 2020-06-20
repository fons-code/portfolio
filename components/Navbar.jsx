const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">Fonscode</div>
      <nav className="navbar__menu">
        <ul>
          <li>
            <a href="#">post</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
