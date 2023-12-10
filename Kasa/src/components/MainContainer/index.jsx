import PropTypes from 'prop-types'
import '../../style/components/MainContainer.scss'

MainContainer.propTypes = {
    children: PropTypes.node,
}

function MainContainer({ children }) {
    return <div className="main-container">{children}</div>
}

export default MainContainer
