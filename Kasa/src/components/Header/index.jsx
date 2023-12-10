import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import '../../style/components/Header.scss'

function Header() {
    return (
        <nav className="navContainer">
            <Link to="/">
                <img src={Logo} />
            </Link>
            <div>
                <Link className="headerLink" to="/">
                    Home
                </Link>
                <Link className="headerLink" to="/Housing">
                    Housing
                </Link>
                <Link className="headerLink" to="/About">
                    About
                </Link>
            </div>
        </nav>
    )
}

export default Header
