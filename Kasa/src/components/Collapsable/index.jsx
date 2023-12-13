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
    const [initialLoad, setInitialLoad] = useState(true)

    function handleClickOnList() {
        if (initialLoad) {
            setInitialLoad(false)
        }
        setTextVisible(!isTextVisible)
    }

    return (
        <div
            className={`list-container ${
                initialLoad ? '' : isTextVisible ? 'open' : 'close'
            }`}
            onClick={handleClickOnList}
        >
            <div className="list-header">
                <h3>{title}</h3>
                <img
                    src={arrow}
                    className={`${
                        initialLoad ? '' : isTextVisible ? 'open' : 'close'
                    }`}
                ></img>
            </div>
            <div
                className={`text-list ${
                    initialLoad ? '' : isTextVisible ? 'show' : 'hide'
                }`}
            >
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
