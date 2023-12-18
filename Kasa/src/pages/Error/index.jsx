import { Link } from 'react-router-dom'
import { Layout } from '../../utils/Layout'
import './style.scss'

export function Error() {
    return (
        <Layout>
            <div className="error">
                <h1>404</h1>
                <h3>Oups, la page que vous demandez nexiste pas</h3>
                <Link className="headerLink" to="/">
                    Retour à la page dacceuil
                </Link>
            </div>
        </Layout>
    )
}
export default Error
