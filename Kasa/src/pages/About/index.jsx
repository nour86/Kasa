import PropTypes from 'prop-types'
import { Layout } from '../../utils/Layout'
import cover from '../../assets/cover_2.png'
import Banner from '../../components/Banner'
import { Collapsable } from '../../components/Collapsable'
import about from '../../../public/about.json'
import './style.scss'

AboutContainer.propTypes = {
    children: PropTypes.node,
}

function AboutContainer({ children }) {
    return <div className="about-container">{children}</div>
}

export function About() {
    return (
        <Layout>
            <Banner cover={cover} alt="paysage" title="" />
            <AboutContainer>
                {about.map((element, index) => (
                    <Collapsable
                        key={`${element.content}-${index}`}
                        content={element.content}
                        title={element.title}
                    />
                ))}
            </AboutContainer>
        </Layout>
    )
}
