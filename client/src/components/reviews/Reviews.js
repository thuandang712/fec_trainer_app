import React from 'react'
import ReviewItem from './ReviewItem'


class Reviews extends React.Component {
    render() {

        const {reviews, deleteReview, selectSingleReview} = this.props

        return(
            <div>
                {reviews.map(review => (
                    <ReviewItem 
                    review={review} 
                    key={review.review_id} 
                    deleteReview={deleteReview}
                    selectSingleReview={selectSingleReview}
                    />
                ))}
            </div>
        )
    }
}

export default Reviews

