import React from 'react'

const TrainerItem = ({trainer}) => {
    return (
        <div>
            <h1>{`Name: ${trainer.first_name} ${trainer.last_name}`}</h1>
            <p>{`Email: ${trainer.email}`}</p>
            <p>{`Phone: ${trainer.phone_number}`}</p>
            <p>{`Body building: ${trainer.bodybuilding}`}</p>
            <p>{`Running: ${trainer.running}`}</p>
            <p>{`Power lifting: ${trainer.power_lifting}`}</p>
            <p>{`Swimming: ${trainer.swimming}`}</p>
            <p>{`Cycling: ${trainer.cycling}`}</p>
        </div>
    )
}

export default TrainerItem