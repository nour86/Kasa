import cover from '../../assets/cover_1.png'
import Banner from '../../components/Banner'
import { Layout } from '../../utils/Layout'
import { useEffect, useState } from 'react'
import { HouseCards } from '../../components/HouseCards'

export function Home() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        let houses = window.localStorage.getItem('houses')
        houses == null &&
            fetchData().then((houses = window.localStorage.getItem('houses')))
        houses = JSON.parse(houses)
        setData(houses)
        setLoading(false)

        async function fetchData() {
            try {
                const response = await fetch('./public/data.json')
                const data = await response.json()
                const listOfHouses = JSON.stringify(data)
                window.localStorage.setItem('houses', listOfHouses)
            } catch (err) {
                console.log(err)
                setError(true)
            }
        }
    }, [])

    return (
        <Layout>
            {loading ? (
                'Loading...'
            ) : error ? (
                'Error...'
            ) : (
                <>
                    <Banner cover={cover} alt="photo de falaises">
                        <h1>
                            Chez Vous,
                            <br className="ismobile" /> partout et ailleurs
                        </h1>
                    </Banner>
                    <HouseCards houseList={data} />
                </>
            )}
        </Layout>
    )
}
