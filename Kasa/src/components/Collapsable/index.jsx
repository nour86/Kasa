import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.scss'
import arrow from './../../assets/arrow_up.svg'

Collapsable.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

export function Collapsable({ content, title }) {
    const [isTextVisible, setTextVisible] = useState(false)

    function handleClickOnList() {
        setTextVisible(!isTextVisible)
    }

    return (
        <div className="list-container">
            <div className="list-header">
                <h3>{title}</h3>
                <img
                    src={arrow}
                    className={`${isTextVisible ? 'open icon' : 'close icon'}`}
                    onClick={() => handleClickOnList()}
                ></img>
            </div>
            <div className={`text-list ${isTextVisible ? 'show' : 'hide'}`}>
                {typeof content === 'string' ? (
                    <p className="elements">{content}</p>
                ) : (
                    <ul className="elements">
                        {content.map((e, index) => (
                            <li key={`${e}-${index}`}>{e}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
