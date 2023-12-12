import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import './style.scss'

function Header() {
    return (
        <nav className="navContainer">
            <NavLink to="/">
                <img src={Logo} />
            </NavLink>
            <div>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'header-link active' : 'header-link inactive'
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'header-link active' : 'header-link inactive'
                    }
                >
                    About
                </NavLink>
            </div>
        </nav>
    )
}

export default Header
