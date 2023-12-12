import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.scss'
import leftarrow from '../../assets/arrow_left.png'
import righttarrow from '../../assets/arrow_right.png'

Carrousel.propTypes = {
    pictures: PropTypes.array,
}

export function Carrousel({ pictures }) {
    const [pictureNumber, setPictureNumber] = useState(0)

    function handleNav(increment) {
        let newIndex = pictureNumber + increment
        newIndex < 0
            ? setPictureNumber(pictures.length - 1)
            : newIndex >= pictures.length
              ? setPictureNumber(0)
              : setPictureNumber(newIndex)
    }

    if (pictures.length == 1) {
        return (
            <div className="carrousel">
                <img src={pictures[pictureNumber]} alt="nawak" />
            </div>
        )
    } else {
        return (
            <div className="carrousel">
                <img
                    className="banner-img"
                    src={pictures[pictureNumber]}
                    alt="nawak"
                />
                <img
                    className="arrow-left"
                    src={leftarrow}
                    alt="fleche gauche"
                    onClick={() => handleNav(-1)}
                />
                <img
                    className="arrow-right"
                    src={righttarrow}
                    alt="fleche droite"
                    onClick={() => handleNav(1)}
                />
                <span>
                    {pictureNumber + 1}/{pictures.length}
                </span>
            </div>
        )
    }
}
