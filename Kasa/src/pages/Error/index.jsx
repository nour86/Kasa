import { Link } from 'react-router-dom'
import { Layout } from '../../utils/Layout'

export function Error() {
    return (
        <Layout>
            <h1>404</h1>
            <p>Oups, la page que vous demandez nexiste pas</p>
            <Link className="headerLink" to="/">
                Retour à la page dacceuil
            </Link>
        </Layout>
    )
}
export default Error
