import Navbar from '../components/Navbar'

const Header = () => (
    <header>
      <Navbar/>
      <div className="header__content">
        <div className="header__content--text">
          <h1>
            I build beautiful websites <br />
            that perform
          </h1>
          <p>UI designer / Full stack web developer</p>
          <button className="button">Hire me!</button>
        </div>
      </div>
    </header>
)

export default Header;