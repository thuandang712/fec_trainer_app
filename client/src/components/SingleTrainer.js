import React, { Component } from 'react'
import ReviewInput from './reviews/.ReviewInput.js';
import Reviews from './reviews/.Reviews.js';

class SingleTrainer extends Component {

    state = {
        isEditing: false
    }
    
    render () {
    const {singleTrainer, changeLoadingAndSingleTrainer, editTrainer} = this.props
    
    const handleStateChange = () => {
        changeLoadingAndSingleTrainer()
    }

    const handleEditChange = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    
    const buttonText = (this.state.isEditing)?"Cancel Edit" :"Edit Trainer"
    return (
        <div className="trainerContainer">
            <button onClick={handleStateChange}>Back to Trainer List</button>
            { !this.state.isEditing && <center>
            <h1>{singleTrainer[0].first_name} {singleTrainer[0].last_name}</h1>
            <h2>Schedule a consultation: </h2>
            <h3>phone: {singleTrainer[0].phone_number} / email: {singleTrainer[0].email}!</h3>
            <p th:if="${true}">{`Bodybuilding: ${singleTrainer[0].bodybuilding}`}</p>
            <p th:if="${true}">{`Running: ${singleTrainer[0].running}`}</p>
            <p th:if="${true}">{`Power Lifting: ${singleTrainer[0].power_lifting}`}</p>
            <p th:if="${true}">{`Strongman: ${singleTrainer[0].strongman}`}</p>
            <p th:if="${true}">{`Cycling: ${singleTrainer[0].cycling}`}</p>
            <div>
                <ReviewInput/>
            </div> 
            <div>
                <Reviews/>
            </div>
            </center>}
            { this.state.isEditing && <EditTrainer editTrainer={editTrainer} singleTrainer={singleTrainer}/>}
            <button onClick={handleEditChange}>{buttonText}</button>
        </div>
        )
    }
}
export default SingleTrainer