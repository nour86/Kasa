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

    function handleNav(direction) {
        let newIndex = pictureNumber + direction
        newIndex < 0
            ? setPictureNumber(pictures.length - 1)
            : newIndex >= pictures.length
              ? setPictureNumber(0)
              : setPictureNumber(newIndex)
    }

    return (
        <div className="carrousel">
            {pictures.length <= 1 ? (
                <img
                    src={pictures[pictureNumber]}
                    alt="photo du bien à louer"
                />
            ) : (
                <>
                    <img
                        className="banner-img"
                        src={pictures[pictureNumber]}
                        alt="photo du bien à louer"
                    />
                    <img
                        className="arrow arrow-left"
                        src={leftarrow}
                        alt="fleche gauche"
                        onClick={() => handleNav(-1)}
                    />
                    <img
                        className="arrow arrow-right"
                        src={righttarrow}
                        alt="fleche droite"
                        onClick={() => handleNav(1)}
                    />
                    <span>
                        {pictureNumber + 1}/{pictures.length}
                    </span>
                </>
            )}
        </div>
    )
}
