<<<<<<< HEAD
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
=======
import React, { useState } from 'react'
import TrainerItem from './TrainerItem'


// bodybuilding, running, power_lifting, cycling, swimming
const Categories = ({trainers}) => {

    const [bodyBuilding, setBodyBuilding] = useState(false)
    const [running, setRunning] = useState(false)
    const [powerLifting, setPowerLifting] = useState(false)
    const [cycling, setCycling] = useState(false)
    const [swimming, setSwimming] = useState(false)


    const handleClickBody = () => {
        setBodyBuilding(true)
        setRunning(false)
        setPowerLifting(false)
        setCycling(false)
        setSwimming(false)
    }
    
    const handleClickRunning = () => {
        setRunning(true)
        setBodyBuilding(false)
        setPowerLifting(false)
        setCycling(false)
        setSwimming(false)
    }
    
    const handleClickPowerLifting = () => {
        setPowerLifting(true)
        setBodyBuilding(false)
        setRunning(false)
        setCycling(false)
        setSwimming(false)
    }

    const handleClickCycling = () => {
        setCycling(true)
        setBodyBuilding(false)
        setRunning(false)
        setPowerLifting(false)
        setSwimming(false)
    }

    const handleClickSwimming = () => {
        setSwimming(true)
        setBodyBuilding(false)
        setRunning(false)
        setPowerLifting(false)
        setCycling(false)
    }

    const handleGoBack = () => {
        setBodyBuilding(false)
        setRunning(false)
        setPowerLifting(false)
        setCycling(false)
        setSwimming(false)
    }


    const bodyBuildingTrainers = trainers.filter( trainer => trainer.bodybuilding === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer}/>)

    const runningTrainers = trainers.filter( trainer => trainer.running === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer}/>)

    const powerLiftingTrainers = trainers.filter( trainer => trainer.power_lifting === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer}/>)

    const cyclingTrainers = trainers.filter( trainer => trainer.cycling === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer}/>)

    const swimmingTrainers = trainers.filter( trainer => trainer.swimming === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer}/>)


    // conditional rendering
    if (bodyBuilding) {
        return (
            <div>
                {bodyBuildingTrainers}
                <button onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (running) {
        return (
            <div>
                {runningTrainers}
                <button onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (powerLifting) {
        return (
            <div>
                {powerLiftingTrainers}
                <button onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (cycling) {
        return (
            <div>
                {cyclingTrainers}
                <button onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (swimming) {
        return (
            <div>
                {swimmingTrainers}
                <button onClick={handleGoBack}>Back</button>
>>>>>>> 0146647813c8778e6435218ca7c0807d428dee92
            </div>
        )
    }

<<<<<<< HEAD
=======
    return (
        <div>
            <h2 onClick={handleClickBody}>Body Building</h2>
            <h2 onClick={handleClickRunning}>Running</h2>
            <h2 onClick={handleClickPowerLifting}>Power Lifting</h2>
            <h2 onClick={handleClickCycling}>Cycling</h2>
            <h2 onClick={handleClickSwimming}>Swimming</h2>
        </div>
    )
}
>>>>>>> 0146647813c8778e6435218ca7c0807d428dee92


export default Categories