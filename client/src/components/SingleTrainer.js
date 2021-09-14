import React, { useState, Fragment } from 'react'

import ReviewInput from './reviews/ReviewInput';
import Reviews from './reviews/Reviews';
import EditTrainer from './EditTrainer';
import {List} from 'semantic-ui-react'

const SingleTrainer = ({singleTrainer, clearSingleTrainer, reviews, addReview, deleteReview, editReview, editTrainer}) => {

    const [isEditing, setIsEditting] = useState(false)

    const handleEditChange = () => {
        setIsEditting(!isEditing)
    }

    const buttonText = (isEditing) ? "Cancel Edit" : "Edit Trainer"



    return (
        <div className="singleTrainerContainer">
            <button className="ui primary button" onClick={() => clearSingleTrainer()}>Go Home</button>
            <List>
                <List.Item>
                    <List.Content className="singleTrainerItemName">
                        <h1 className="singeTrainerNameSize">{`${singleTrainer[0].first_name} ${singleTrainer[0].last_name}`}</h1>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content className="singleTrainerItem">
                        <h2>Schedule a consultation: <List.Icon name='phone'/> {singleTrainer[0].phone_number} | <List.Icon name='mail'/>  {singleTrainer[0].email}</h2>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content className="singleTrainerItem">
                        <h2 className="checkOutHeader">Check out my reviews!</h2>
                        <h2>   <i class="angle double down icon"></i>   <i class="angle double down icon"></i>   <i class="angle double down icon"></i>   </h2>
                    </List.Content>
                </List.Item>
            </List>
            {isEditing && <EditTrainer singleTrainer={singleTrainer}
            editTrainer={editTrainer}/>}
            <Reviews reviews={reviews} deleteReview={deleteReview} editReview={editReview} />
            <ReviewInput addReview={addReview} singleTrainer={singleTrainer}/>
        </div>
    )
        // { <div>
        //     <button onClick={() => clearSingleTrainer()}>GO HOME</button>
        //     <h1>{singleTrainer[0].first_name} {singleTrainer[0].last_name}</h1>
        //     <h2>Schedule a consultation: </h2>
        //     <h3>phone: {singleTrainer[0].phone_number} / email: {singleTrainer[0].email}!</h3>
        //     <p>{`Bodybuilding: ${singleTrainer[0].bodybuilding}`}</p>
        //     <p>{`Running: ${singleTrainer[0].running}`}</p>
        //     <p>{`Power lifting: ${singleTrainer[0].power_lifting}`}</p>
        //     <p>{`Swimming: ${singleTrainer[0].swimming}`}</p>
        //     <p>{`Cycling: ${singleTrainer[0].cycling}`}</p>
        //     <button onClick={handleEditChange}>{buttonText}</button>
        //     {isEditing && <EditTrainer singleTrainer={singleTrainer}
        //     editTrainer={editTrainer}/>}
        //     <ReviewInput addReview={addReview} singleTrainer={singleTrainer}/>
        //     <Reviews reviews={reviews} deleteReview={deleteReview} editReview={editReview}/>
        // </div> }
    
    
}

export default SingleTrainer
