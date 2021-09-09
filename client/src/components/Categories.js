import React, {useState} from 'react'
import Trainers from './Trainers'

const Categories = ({trainers}) => {
    const [bodyBuilding, setBodyBuilding] = useState(false)
    const [running, setRunning] = useState(false)
    const [cycling, setCycling] = useState(false)
    const [swimming, setSwimming] = useState(false)
    const [powerLifting, setPowerLifting] = useState(false)

    console.log(trainers)
    
        const handleClickCycle = () => {
            setCycling(true)
            setBodyBuilding(false)
            setRunning(false)
            setSwimming(false)
            setPowerLifting(false)
        }
        
        const handleClickBody = () => {
            setCycling(false)
            setBodyBuilding(true)
            setRunning(false)
            setSwimming(false)
            setPowerLifting(false)
        }

        const handleClickRun = () => {
            setCycling(false)
            setBodyBuilding(false)
            setRunning(true)
            setSwimming(false)
            setPowerLifting(false)
        }
        
        const handleClickSwim = () => {
            setCycling(false)
            setBodyBuilding(false)
            setRunning(false)
            setSwimming(true)
            setPowerLifting(false)
        }
        const handleClickPower = () => {
            setCycling(false)
            setBodyBuilding(false)
            setRunning(false)
            setSwimming(false)
            setPowerLifting(true)
        }

        const bodyBuildingTrainers = trainers.map((trainer, index) => {
            console.log(bodyBuildingTrainers)
                return (
                    <div key={index}>
                        <h1>{`Name: ${trainer.first_name} ${trainer.last_name}`}</h1>
                        <p>{`Email: ${trainer.email}`}</p>
                        <p>{`Phone: ${trainer.phone_number}`}</p>
                        <p>{`Body building: ${trainer.bodybuilding}`}</p>
                    </div>
                )
        })

        if (bodyBuilding) {
            return (
                <div>
                    {bodyBuildingTrainers}
                </div>
            )
        }


        return (
            <div className='container'>
                <li onClick={handleClickBody}>Body Building</li>
                <li onClick={handleClickRun}>Running</li>
                <li onClick={handleClickCycle}>Cycling</li>
                <li onClick={handleClickPower}>Power Lifting</li>
                <li onClick={handleClickSwim}>Swimming</li>
                {bodyBuilding && <Trainers trainers={trainers}/>}
                {running && <Trainers trainers={trainers}/>}
                {cycling && <Trainers trainers={trainers}/>}
                {powerLifting && <Trainers trainers={trainers}/>}
                {swimming && <Trainers trainers={trainers}/>}
            </div>
        )
    }


export default Categories
