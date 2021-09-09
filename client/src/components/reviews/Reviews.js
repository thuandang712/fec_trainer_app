import React from 'react'
import ReviewItem from './ReviewItem'


const Reviews = ({reviews}) => {

    return (
        <div>
            {reviews.map(review => (
                <ReviewItem 
                key={review.comment_id} 
                review={review} 
                // deleteReview={deleteReview}
                // selectSingleReview={selectSingleReview}
                />
            ))}
        </div>
    ) 

}

export default Reviews

