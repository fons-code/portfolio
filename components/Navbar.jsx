const Navbar = () => {
  return (
    <div className="navbar is-transparent navbar-container">
      <div className="navbar__logo">Fonscode</div>
      <nav className="navbar__menu mobile-hidden">
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
