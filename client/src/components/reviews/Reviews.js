import React from 'react'
import ReviewItem from './ReviewItem'


const Reviews = ({reviews, deleteReview, editReview}) => {

    return (
        <div>
            {reviews.map(review => (
                <ReviewItem 
                key={review.comment_id} 
                review={review} 
                deleteReview={deleteReview}
                editReview={editReview}/>
            ))}
        </div>
    ) 
}

export default Reviews

