import React, {Fragment} from 'react'

class EditReview extends React.Component {
    state = {
        text: ''
    }

    render() {

        const {text} = this.state
        const {singleReview, editReview} = this.props

        const handleChange = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedReview = {
                comment_body: text,
                comment_id: parseInt(e.target.id)
            }
            editReview(updatedReview)
        }

        return(
            <Fragment>
                <h1 id="logo">Edit Review</h1>
                <form onSubmit={handleSubmit} id={singleReview.comment_id}>
                    <input className="label" type="text" value={text} onChange={handleChange}/>
                    <input type="submit" className="btn hover"/>
                </form>
            </Fragment>
        )
    }
}

export default EditReview