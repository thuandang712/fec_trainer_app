import React from 'react'

class ReviewInput extends React.Component {

    state = {
        reviewText: ''
    }

    render() {
        const {reviewText} = this.state
        const {addReview, singleTrainer} = this.props

        const handleChange = (e) => {
            this.setState({reviewText: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            addReview({
                comment_body: reviewText,
                trainer_id: singleTrainer[0].trainer_id
            })
            this.setState({reviewText: ''})
        }

        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    className="label"
                    placeholder="Add review here..."
                    value={reviewText}
                    onChange={handleChange}
                    />
                    <input type="submit" className="btn"/>
                </form>
            </div>
        )
    }
}

export default ReviewInput