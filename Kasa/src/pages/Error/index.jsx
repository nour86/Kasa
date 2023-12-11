import { Link } from 'react-router-dom'

export function Error() {
    return (
        <>
            <h1>404</h1>
            <p>Oups, la page que vous demandez nexiste pas</p>
            <Link className="headerLink" to="/">
                Retour à la page dacceuil
            </Link>
        </>
    )
}

export default Error
