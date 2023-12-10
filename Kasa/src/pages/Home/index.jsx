import cover from '../../assets/cover_1.png'

import Banner from '../../components/Banner'

export function Home() {
    return (
        <Banner
            cover={cover}
            alt="photo de falaises"
            title="Chez Vous, Partout et Ailleurs"
        />
    )
}
