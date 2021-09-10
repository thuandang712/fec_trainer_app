import React from 'react'

const TrainerItem = ({trainer}) => {
    return (
        <div className="trainerItemContainer">
            <h1 className="trainerName">{`${trainer.first_name} ${trainer.last_name}`}</h1>
            <p className="trainerEmail">{`Email: ${trainer.email}`}</p>
            <p className="trainerPhone">{`Phone: ${trainer.phone_number}`}</p>
        </div>
    )
}

export default TrainerItem