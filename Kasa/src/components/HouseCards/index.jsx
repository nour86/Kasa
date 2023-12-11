import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../style/pages/Home.scss'
// export const HouseGallery () {
//     return ()
// }

HouseCards.propTypes = {
    houseList: PropTypes.array,
}

export function HouseCards({ houseList }) {
    console.log(houseList)
    return (
        <div className="houseGallery">
            {houseList.map((house) => (
                <figure className="houseCard" key={`article-${house.id}`}>
                    <NavLink to={`/housing/${house.id}`}></NavLink>
                    <img src={house.cover} alt={house.title} />
                    <figcaption>{house.title}</figcaption>
                </figure>
            ))}
        </div>
    )
}
