import React, { useState } from 'react'
import EditReview from './EditReview'

const ReviewItem = ({review, deleteReview, editReview}) => {
    
    const [isEditing, setIsEditting] = useState(false)

    const handleDelete = (e) => {
        console.log(e.target.id)
        deleteReview(parseInt(e.target.id))
    }

    const handleEditStateChange = () => {
        setIsEditting(true)
    }

    return(
        <div className="reviewItem">
            <h1 className="hover">{review.comment_body}</h1>
            <p>Review ID: {review.comment_id}</p>
            <p>Belongs to trainer ID: {review.trainer_id}</p>
            <button className="btn hover" id={review.comment_id} onClick={handleDelete}>Delete Review</button>
            <button onClick={handleEditStateChange}>Edit Review</button>
            {isEditing && <EditReview review={review} editReview={editReview}/>}
        </div>
    )
}

export default ReviewItem