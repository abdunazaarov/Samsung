
import "./Header.scss"
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline, IoSearchSharp } from "react-icons/io5";


const navbarItem1 = ["Shop", "All", "Mobile", "TV & Audio", "Appliances", "Computing", "Displays", "Accessorlies", "SmartThings"]
const navbarItem2 = ["Explore", "Support", "For Business"]



function Header(){
    return <header className="header">
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">SAMSUNG</div>
                <ul className="navbar__lists">
                    {navbarItem1?.map((link, inx) => (
                        <li key={inx} className="navbar__items">
                            <a className="navbar__link" href="#">
                                <span>{link}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="navbar__lists">
                    {navbarItem2?.map((link, inx) => (
                        <li key={inx} className="navbar__items">
                            <a className="navbar__link" href="#">
                                <span>{link}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="navbar__icons">
                    <IoSearchSharp/>
                    <FiShoppingCart/>
                    <IoPersonOutline />
                </div>
            </nav>
        </div>
    </header>
}

export default Header;