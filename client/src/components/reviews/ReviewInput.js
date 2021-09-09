
import React from 'react'

class ReviewInput extends React.Component {

    state = {
        text: ''
    }

    render() {
        const {text} = this.state
        const {addReview} = this.props

        const handleChange = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            addReview({task: text})
            this.setState({text: ''})
        }

        return(
            <form onSubmit={handleSubmit}>
                <input type="text"
                className="label"
                name="text"
                value={text}
                onChange={handleChange}
                 />
                <input type="submit" className="btn"/>
            </form>
        )
    }
}

export default ReviewInput