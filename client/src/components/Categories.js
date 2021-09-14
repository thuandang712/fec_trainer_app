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
            <div>
                {bodyBuildingTrainers}
                <button className="ui button" onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (running) {
        return (
            <div>
                {runningTrainers}
                <button className="ui button" onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (powerLifting) {
        return (
            <div>
                {powerLiftingTrainers}
                <button className="ui button" onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (cycling) {
        return (
            <div>
                {cyclingTrainers}
                <button className="ui button" onClick={handleGoBack}>Back</button>
            </div>
        )
    } else if (swimming) {
        return (
            <div>
                {swimmingTrainers}

                <button className="ui button" onClick={handleGoBack}>Back</button>

            </div>
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