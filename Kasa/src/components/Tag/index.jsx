import PropTypes from 'prop-types'
import './style.scss'

TagList.propTypes = {
    tags: PropTypes.array,
    classname: PropTypes.string,
}
export function TagList({ tags, classname }) {
    return (
        <ul className={`tag-container ${classname}`}>
            {tags.map((e, index) => (
                <li className="tag" key={`${e}-${index}`}>
                    {e}
                </li>
            ))}
        </ul>
    )
}
