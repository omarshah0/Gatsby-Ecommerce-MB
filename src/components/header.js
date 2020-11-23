import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShoppingBasket,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons"
import logo from "../images/Logo.svg"
import { connect } from "react-redux"

const Header = ({ cart }) => {
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
      <div className="header__shop">
        <div className="header__cart">
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className={`shop-icon ${cart.length === 0 && "disabled"}`}
            />
          </Link>
          {cart.length !== 0 && (
            <span className="cart-counter">{cart.length}</span>
          )}
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = ({ cart }) => {
  return { cart }
}

export default connect(mapStateToProps, null)(Header)
