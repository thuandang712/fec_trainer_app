import React, {Fragment, useState } from 'react'
import TrainerItem from './TrainerItem'

import {Grid} from 'semantic-ui-react'


const Categories = ({trainers, selectSingleTrainer}) => {

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
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer} selectSingleTrainer={selectSingleTrainer}/>)

    const runningTrainers = trainers.filter( trainer => trainer.running === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer} selectSingleTrainer={selectSingleTrainer}/>)

    const powerLiftingTrainers = trainers.filter( trainer => trainer.power_lifting === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer} selectSingleTrainer={selectSingleTrainer}/>)

    const cyclingTrainers = trainers.filter( trainer => trainer.cycling === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer} selectSingleTrainer={selectSingleTrainer}/>)

    const swimmingTrainers = trainers.filter( trainer => trainer.swimming === true)
        .map( (trainer, i) => <TrainerItem key={i} trainer={trainer} selectSingleTrainer={selectSingleTrainer}/>)


    // conditional rendering
    if (bodyBuilding) {
        return (
            <Fragment>
                <button className="ui button back-btn" onClick={handleGoBack}>Back</button>
                <div className='trainers-grid-container'>
                    {bodyBuildingTrainers}
                </div>
            </Fragment>
        )
    } else if (running) {
        return (
            <Fragment>
                <button className="ui button back-btn" onClick={handleGoBack}>Back</button>
                <div className='trainers-grid-container'>
                    {runningTrainers}
                </div>
            </Fragment>
        )
    } else if (powerLifting) {
        return (
            <Fragment>
                <button className="ui button back-btn" onClick={handleGoBack}>Back</button>
                <div className='trainers-grid-container'>
                    {powerLiftingTrainers}
                </div>
            </Fragment>
        )
    } else if (cycling) {
        return (
            <Fragment>
                <button className="ui button back-btn" onClick={handleGoBack}>Back</button>
                <div className='trainers-grid-container'>
                    {cyclingTrainers}
                </div>
            </Fragment>
        )
    } else if (swimming) {
        return (
            <Fragment>
                <button className="ui button back-btn" onClick={handleGoBack}>Back</button>
                <div className='trainers-grid-container'>
                    {swimmingTrainers}
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Grid columns={5} divided>
                <Grid.Row>
                    <Grid.Column>
                        <h2 className="catagoriesItem" onClick={handleClickBody}>Body Building</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 className="catagoriesItem" onClick={handleClickRunning}>Running</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 className="catagoriesItem" onClick={handleClickSwimming}>Swimming</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 className="catagoriesItem" onClick={handleClickCycling}>Cycling</h2>
                    </Grid.Column>
                    <Grid.Column>
                        <h2 className="catagoriesItem" onClick={handleClickPowerLifting}>Power Lifting</h2>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Fragment>
    )

}
export default Categories