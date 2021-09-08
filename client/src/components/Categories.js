import React, { useState } from 'react'
import Trainers from './Trainers'


// bodybuilding, running, power_lifting, cycling, swimming
const Categories = ({trainers}) => {
    const [bodyBuilding, setBodyBuilding] = useState(false)
    const [running, setRunning] = useState(false)
    const [powerLifting, setPowerLifting] = useState(false)
    const [cycling, setCycling] = useState(false)
    const [swimming, setSwimming] = useState(false)


    const handleClick = () => {
        setBodyBuilding(true)
        console.log(bodyBuilding)
    }


    return (
        <div>
            <h2 onClick={handleClick}>Body Building</h2>
            <h2>Running</h2>
            <h2>Power Lifting</h2>
            <h2>Cycling</h2>
            <h2>Swimming</h2>
            {bodyBuilding && <Trainers trainers={trainers}/>}
        </div>
    )
}


export default Categories