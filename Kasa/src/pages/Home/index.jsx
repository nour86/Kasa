import cover from '../../assets/cover_1.png'
import Banner from '../../components/Banner'
import { Layout } from '../../utils/Layout'
import { HouseCards } from '../../components/HouseCards'
import houseList from '../../data/house-list.json'

export function Home() {
    return (
        <Layout>
            <Banner cover={cover} alt="photo de falaises">
                <h1>
                    Chez Vous,
                    <br className="ismobile" /> Partout et Ailleurs
                </h1>
            </Banner>
            <HouseCards houseList={houseList} />
        </Layout>
    )
}
