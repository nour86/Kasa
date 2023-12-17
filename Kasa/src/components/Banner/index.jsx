import PropTypes from 'prop-types'
import './style.scss'

Banner.propTypes = {
    cover: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    children: PropTypes.node,
}

function Banner({ cover, alt, children }) {
    return (
        <div className="banner">
            <img src={cover} alt={alt} />
            {children}
        </div>
    )
}

export default Banner
