import React, { useState } from 'react'
import ReviewInput from './reviews/ReviewInput';
import Reviews from './reviews/Reviews';

const SingleTrainer = ({singleTrainer, clearSingleTrainer, reviews, addReview, deleteReview, editReview, editTrainer}) => {

    const [isEditing, setIsEditting] = useState(false)

    const handleEditChange = () => {
        setIsEditting(!isEditing)
    }

    const buttonText = (isEditing) ? "Cancel Edit" : "Edit Trainer"


    return (
        <div>
            <button onClick={() => clearSingleTrainer()}>GO HOME</button>
            
            <h1>{singleTrainer[0].first_name} {singleTrainer[0].last_name}</h1>
            <h2>Schedule a consultation: </h2>
            <h3>phone: {singleTrainer[0].phone_number} / email: {singleTrainer[0].email}!</h3>
            <p>{`Bodybuilding: ${singleTrainer[0].bodybuilding}`}</p>
            <p>{`Running: ${singleTrainer[0].running}`}</p>
            <p>{`Power lifting: ${singleTrainer[0].power_lifting}`}</p>
            <p>{`Swimming: ${singleTrainer[0].swimming}`}</p>
            <p>{`Cycling: ${singleTrainer[0].cycling}`}</p>
            <button onClick={handleEditChange}>{buttonText}</button>
            <ReviewInput addReview={addReview} singleTrainer={singleTrainer}/>
            <Reviews reviews={reviews} deleteReview={deleteReview} editReview={editReview}/>
        </div>
    )
    
}

export default SingleTrainer
