import React, {Fragment} from 'react'
import EditReview from './EditReview'

class SingleReview extends React.Component {

    state = {
        edit: false
    }
    
    
    render() {

        const {edit} = this.state
        const {singleReview, clearSingleReview, editReview} = this.props
        

        const handleClearSingleReview = () => {
            clearSingleReview()
        }

        const handleEditStateChange = () => {
            this.setState({edit: true})
        }
        

        

        return (
            <Fragment>
                <h1 id="logo">Single review component</h1>
                <h1>{singleReview.comment_body}</h1>
                <p>{singleReview.comment_id}</p>
                <button className="btn hover" onClick={handleClearSingleReview}>Back</button>
                <button className="btn hover edit" onClick={handleEditStateChange}>Edit</button>
                {edit && <EditReview singleTodo={singleReview} editTodo={editReview} />}        
            </Fragment>
        )
    }
}

export default SingleReview