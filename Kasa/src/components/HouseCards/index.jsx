import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './style.scss'

HouseCards.propTypes = {
    houseList: PropTypes.array,
}

export function HouseCards({ houseList }) {
    return (
        <div className="home-gallery">
            {houseList.map((house) => (
                <figure className="house-card" key={`article-${house.id}`}>
                    <NavLink to={`/housing/${house.id}`}></NavLink>
                    <img src={house.cover} alt={house.title} />
                    <figcaption className="house-card__title">
                        {house.title}
                    </figcaption>
                </figure>
            ))}
        </div>
    )
}
