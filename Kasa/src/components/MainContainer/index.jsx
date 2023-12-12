import PropTypes from 'prop-types'
import './style.scss'

MainContainer.propTypes = {
    children: PropTypes.node,
}

function MainContainer({ children }) {
    return <main className="main-container">{children}</main>
}

export default MainContainer
