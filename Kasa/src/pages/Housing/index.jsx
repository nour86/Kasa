import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { houseList } from '../../assets/datas/houseList'
import { Carrousel } from '../../components/Carrousel'
import { TagList } from '../../components/Tag'
import { Collapsable } from '../../components/Collapsable'
import '../../style/pages/Housing.scss'

AboutHouse.propTypes = {
    children: PropTypes.node,
}

function AboutHouse({ children }) {
    return <div className="about-house">{children}</div>
}

HouseInfos.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.array,
}
function HouseInfos({ title, location, tags }) {
    return (
        <div className="house-infos">
            <h1>{title}</h1>
            <p>{location}</p>
            <TagList tags={tags} />
        </div>
    )
}

OwnerInfos.propTypes = {
    host: PropTypes.array,
    rating: PropTypes.number,
}

function OwnerInfos({ host, rating }) {
    return (
        <div className="owner-infos">
            <h1>{host.name}</h1>
            <p>{rating}</p>
        </div>
    )
}

export function Housing() {
    const { houseId } = useParams()
    const house = houseList.find((house) => house.id === houseId)
    console.log(house)

    return (
        <>
            <Carrousel pictures={house.pictures} />
            <AboutHouse>
                <div className="main-infos">
                    <HouseInfos
                        title={house.title}
                        location={house.location}
                        tags={house.tags}
                    />
                    <OwnerInfos host={house.host} rating={house.rating} />
                </div>
                <div className="more-infos">
                    <Collapsable
                        title="Description"
                        content={house.description}
                    />
                    <Collapsable
                        title="Equipements"
                        content={house.equipments}
                    />
                </div>
            </AboutHouse>
        </>
    )
}
