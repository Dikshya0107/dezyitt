import React from 'react';
import './Navbar.css';
import { MenuItems } from './MenuItems';

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    const { clicked } = this.state;

    return (
      <nav className="NavbarItems">
        <a href="#movetohome" className="NavbarItems__brand" onClick={this.closeMenu}>
          <img
            src="https://static.wixstatic.com/media/ec9816_fac99786349f4b59aeaf8550dacdbc2d~mv2.gif"
            className="Navimg"
            alt="DezyIt logo"
          />
        </a>

        <button
          type="button"
          className="menu-icon"
          onClick={this.handleClick}
          aria-label={clicked ? 'Close menu' : 'Open menu'}
          aria-expanded={clicked}
        >
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </button>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item) => (
            <li key={item.title}>
              <a
                className={item.cName}
                href={item.url}
                onClick={this.closeMenu}
                {...(item.target
                  ? { target: item.target, rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
