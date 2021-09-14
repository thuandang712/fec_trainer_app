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

        // <Fragment>
        //     <List>
        //         <List.Item>
        //             <List.Icon name='users' />
        //             <List.Content>
        //                 <h1>{`Name: ${singleTrainer[0].first_name} ${singleTrainer[0].last_name}`}</h1>
        //             </List.Content>
        //         </List.Item>
        //         <List.Item>
        //             <List.Icon name='marker' />
        //             <List.Content>New York, NY</List.Content>
        //         </List.Item>
        //         <List.Item>
        //             <List.Icon name='mail' />
        //             <List.Content>
        //                 <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
        //             </List.Content>
        //         </List.Item>
        //         <List.Item>
        //             <List.Icon name='linkify' />
        //             <List.Content>
        //                     <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
        //             </List.Content>
        //         </List.Item>
        //     </List>

        //     {/* <ReviewInput />
        //     <Reviews reviews={reviews}/>
        // </Fragment> */}
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
            {isEditing && <EditTrainer singleTrainer={singleTrainer}
            editTrainer={editTrainer}/>}
            <ReviewInput addReview={addReview} singleTrainer={singleTrainer}/>
            <Reviews reviews={reviews} deleteReview={deleteReview} editReview={editReview}/>
        </div>
    )
    
}

export default SingleTrainer
