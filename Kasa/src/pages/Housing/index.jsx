import { useParams } from 'react-router-dom'
import Error from '../Error'
// import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Layout } from '../../utils/Layout'
import houseList from '../../data/house-list.json'
import { Carrousel } from '../../components/Carrousel'
import { TagList } from '../../components/Tag'
import { Collapsable } from '../../components/Collapsable'
import { Rating } from '../../components/Rating'
import './style.scss'
import { useEffect, useState } from 'react'

AboutHouse.propTypes = {
    children: PropTypes.node,
}
function AboutHouse({ children }) {
    return <div className="about-house">{children}</div>
}
HouseInfos.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    classname: PropTypes.string,
}
function HouseInfos({ title, location, classname }) {
    return (
        <div className={classname}>
            <h1>{title}</h1>
            <p>{location}</p>
        </div>
    )
}
OwnerInfos.propTypes = {
    host: PropTypes.object,
    classname: PropTypes.string,
}
function OwnerInfos({ host, classname }) {
    return (
        <div className={classname}>
            <h2>{host.name}</h2>
            <div className="profile-pic">
                <img src={host.picture ? host.picture : ''} />
            </div>
        </div>
    )
}

export function Housing() {
    const [house, setHouse] = useState(null)
    const { houseId } = useParams()

    useEffect(() => {
        const appt = houseList.find((house) => house.id == houseId)
        setHouse(appt)
    }, [houseId])

    return (
        <>
            {!house ? (
                <Error />
            ) : (
                <Layout>
                    <Carrousel pictures={house.pictures} />
                    <AboutHouse>
                        <div className="main-infos">
                            <HouseInfos
                                classname="house-infos"
                                title={house.title}
                                location={house.location}
                            />
                            <TagList classname="house-tags" tags={house.tags} />
                            <OwnerInfos
                                classname="owner-infos"
                                host={house.host}
                            />
                            <Rating
                                classname="house-rating"
                                rating={house.rating}
                            />
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
                </Layout>
            )}
        </>
    )
}
