import cover from '../../assets/cover_1.png'
import Banner from '../../components/Banner'
import { Layout } from '../../utils/Layout'
import { HouseCards } from '../../components/HouseCards'
// import { useFetch } from '../../utils/hooks/fetch'
import { houseList } from '../../assets/datas/houseList'

export function Home() {
    // const { data } = useFetch('../../../../public/data.json')
    return (
        <Layout>
            <Banner
                cover={cover}
                alt="photo de falaises"
                title="Chez Vous, Partout et Ailleurs"
            />
            <HouseCards houseList={houseList} />
        </Layout>
    )
}
