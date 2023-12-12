import PropTypes from 'prop-types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MainContainer from '../../components/MainContainer'

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
