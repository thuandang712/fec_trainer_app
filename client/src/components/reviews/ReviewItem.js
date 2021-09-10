import React from 'react'

const ReviewItem = ({review}) => {
   

    const handleDelete = (e) => {
        // deleteReview(parseInt(e.target.id))
    }

    return(
        <div className="reviewItem">
            <h1 className="hover">{review.comment_body}</h1>
            <p>Review ID: {review.comment_id}</p>
            <p>Belongs to trainer ID: {review.trainer_id}</p>
            <button className="btn hover" id={review.comment_id} onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ReviewItem