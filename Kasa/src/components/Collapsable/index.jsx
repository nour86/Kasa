import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.scss'
import arrow from './../../assets/arrow_up.svg'

Collapsable.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string || PropTypes.array,
}

export function Collapsable({ content, title }) {
    const [isTextVisible, setTextVisible] = useState(false)

    function handleClickOnList() {
        isTextVisible ? setTextVisible(false) : setTextVisible(true)
    }

    return (
        <div className={`list-container ${isTextVisible ? 'open' : 'close'}`}>
            <div className="list-header">
                <h3>{title}</h3>
                <img
                    src={arrow}
                    className={`${isTextVisible ? 'open' : 'close'}`}
                    onClick={() => handleClickOnList()}
                ></img>
            </div>
            <div className={`text-list ${isTextVisible ? 'show' : 'hide'}`}>
                {typeof content === 'string' ? (
                    <p className="elements">{content}</p>
                ) : (
                    <div className="elements">
                        {content.map((e, index) => (
                            <p key={index}>{e}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
