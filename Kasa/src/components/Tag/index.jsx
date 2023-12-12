import PropTypes from 'prop-types'
import './style.scss'

TagList.propTypes = {
    tags: PropTypes.array,
}
export function TagList({ tags }) {
    return (
        <ul>
            {tags.map((e, index) => (
                <li className="tag" key={index}>
                    {e}
                </li>
            ))}
        </ul>
    )
}
