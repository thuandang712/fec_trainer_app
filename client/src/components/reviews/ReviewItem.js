
import React from 'react'

class ReviewItem extends React.Component {
    render() {

        const {review, deleteReview, selectSingleReview} = this.props

        const handleDelete = (e) => {
            deleteReview(parseInt(e.target.id))
        }

        return(
            <div className="reviewItem">
                <h1 className="hover" onClick={() => selectSingleReview(review)} >{review.comment_body}</h1>
                <p>{review.comment_id}</p>
                <button className="btn hover" id={review.comment_id} onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default ReviewItem