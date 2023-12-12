import fullstar from '../../assets/star_full.svg'
import emptystar from '../../assets/star_empty.svg'
import './style.scss'

import PropTypes from 'prop-types'

Rating.propTypes = {
    rating: PropTypes.string,
}
export function Rating({ rating }) {
    const range = [1, 2, 3, 4, 5]
    return (
        <ul className="owner-rating">
            {range.map((e) =>
                e <= parseInt(rating) ? (
                    <li key={e}>
                        <img src={fullstar} />
                    </li>
                ) : (
                    <li key={e}>
                        <img src={emptystar} />
                    </li>
                )
            )}
        </ul>
    )
}
