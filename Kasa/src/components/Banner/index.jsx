import PropTypes from 'prop-types'
import '../../style/components/Banner.scss'

Banner.propTypes = {
    cover: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
}

function Banner({ cover, alt, title }) {
    return (
        <div className="banner">
            <img src={cover} alt={alt} />
            <h1>{title}</h1>
        </div>
    )
}

export default Banner
