import { NavLink } from 'react-router-dom'
import Logo from '../../../assets/logo_header.svg'
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
                        Acceuil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'header-link active'
                                : 'header-link inactive'
                        }
                    >
                        A Propos
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Header
