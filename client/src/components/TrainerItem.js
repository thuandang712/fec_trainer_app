import React from 'react'


const TrainerItem = ({trainer, selectSingleTrainer}) => {


    const handleSingleTrainer = (e) => {
        selectSingleTrainer(e.target.id)
    }

    return (
        <div>
            <h1 id={trainer.trainer_id} onClick={handleSingleTrainer}>{`Name: ${trainer.first_name} ${trainer.last_name}`}</h1>
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