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
    }

    const bodyBuildingTrainers = trainers.map((trainer, i) =>  {
        if(trainer.bodybuilding) {
            return (
                <div key={i}>
                    <h1>{`Name: ${trainer.first_name} ${trainer.last_name}`}</h1>
                    <p>{`Email: ${trainer.email}`}</p>
                    <p>{`Phone: ${trainer.phone_number}`}</p>
                    <p>{`Body building: ${trainer.bodybuilding}`}</p>
                </div>
            )
        }
    })

    if (bodyBuilding) {
        return (
            <div>
                {bodyBuildingTrainers}
            </div>
        )
    }

    return (
        <div>
            <h2 onClick={handleClick}>Body Building</h2>
            <h2>Running</h2>
            <h2>Power Lifting</h2>
            <h2>Cycling</h2>
            <h2>Swimming</h2>
        </div>
    )
}


export default Categories