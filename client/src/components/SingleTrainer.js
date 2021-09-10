import React from 'react'
import ReviewInput from './reviews/ReviewInput';
import Reviews from './reviews/Reviews';

const SingleTrainer = ({singleTrainer, clearSingleTrainer, reviews}) => {
    return (
        <div>
            <button onClick={() => clearSingleTrainer()}>GO HOME</button>
            <h1>{`Name: ${singleTrainer[0].first_name} ${singleTrainer[0].last_name}`}</h1>
            <p>{`Email: ${singleTrainer[0].email}`}</p>
            <p>{`Phone: ${singleTrainer[0].phone_number}`}</p>
            <p>{`Body building: ${singleTrainer[0].bodybuilding}`}</p>
            <p>{`Running: ${singleTrainer[0].running}`}</p>
            <p>{`Power lifting: ${singleTrainer[0].power_lifting}`}</p>
            <p>{`Swimming: ${singleTrainer[0].swimming}`}</p>
            <p>{`Cycling: ${singleTrainer[0].cycling}`}</p>
            <div>
                <ReviewInput />
            </div>
            <div>
                <Reviews reviews={reviews}/>
            </div>
        </div>
    )
}

export default SingleTrainer