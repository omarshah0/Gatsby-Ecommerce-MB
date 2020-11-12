import React from "react"
import { Link } from "gatsby"
import logo from "../images/Logo.svg"

const Header = () => {
  return (
    <header className="space-between border">
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/pages/men" activeClassName="active">
              Men
            </Link>
          </li>
          <li>
            <Link to="/pages/men" activeClassName="active">
              Women
            </Link>
          </li>
          <li>
            <Link to="/pages/men" activeClassName="active">
              Juniors
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Meerab Boutique" />
        </Link>
      </div>
      <div className="header__shop">Shop Goes Here</div>
    </header>
  )
}

export default Header
