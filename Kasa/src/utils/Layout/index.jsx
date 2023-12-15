import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'
import MainContainer from './MainContainer'

Layout.propTypes = {
    children: PropTypes.node,
}

export function Layout({ children }) {
    return (
        <>
            <Header />
            <MainContainer>{children}</MainContainer>
            <Footer />
        </>
    )
}
