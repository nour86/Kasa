import cover from '../../assets/cover_1.png'
import Banner from '../../components/Banner'
import { HouseCards } from '../../components/HouseCards'
// import { useFetch } from '../../utils/hooks/fetch'
import { houseList } from '../../assets/datas/houseList'

export function Home() {
    // const { data } = useFetch('../../../../public/data.json')
    return (
        <>
            <Banner
                cover={cover}
                alt="photo de falaises"
                title="Chez Vous, Partout et Ailleurs"
            />
            <HouseCards houseList={houseList} />
        </>
    )
}
