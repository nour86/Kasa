import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo_header.svg'
import './style.scss'

function Header() {
    return (
        <header>
            <nav className="navContainer">
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'header-link active'
                                : 'header-link inactive'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'header-link active'
                                : 'header-link inactive'
                        }
                    >
                        About
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
