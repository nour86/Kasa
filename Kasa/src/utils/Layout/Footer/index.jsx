import Logo from '../../../assets/logo_footer.svg'
import './style.scss'

function Footer() {
    return (
        <footer>
            <img src={Logo} />
            <p>
                © 2020 Kasa. All <br /> rights reserved
            </p>
        </footer>
    )
}

export default Footer
