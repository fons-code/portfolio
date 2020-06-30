import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar is-transparent navbar-container">
      <div className="navbar__logo"><Link href="/"><a>Fonscode</a></Link></div>
      <nav className="navbar__menu mobile-hidden">
        <ul>
          <li>
            <Link href='/portfolio'>
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
