import React from 'react'
import ReviewInput from './reviews/ReviewInput';
import Reviews from './reviews/Reviews';
import ReviewItem from './reviews/ReviewItem';
import EditTrainer from './EditTrainer.js';

class SingleTrainer extends React.Component {
    
    state = {
        isEditing: false
    }
    
    render () {
    const {singleTrainer, clearSingleTrainer, reviews, editTrainer} = this.props
    

    const handleEditChange = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    
    const buttonText = (this.state.isEditing)?"Cancel Edit" :"Edit Trainer"
    return (
        <div>
            <button onClick={() => clearSingleTrainer()}>GO HOME</button>
            { !this.state.isEditing && <center>
            <h1>{singleTrainer[0].first_name} {singleTrainer[0].last_name}</h1>
            <h2>Schedule a consultation: </h2>
            <h3>phone: {singleTrainer[0].phone_number} / email: {singleTrainer[0].email}!</h3>
            <p>{`Bodybuilding: ${singleTrainer[0].bodybuilding}`}</p>
            <p>{`Crossfit: ${singleTrainer[0].crossfit}`}</p>
            <p>{`Running: ${singleTrainer[0].running}`}</p>
            <p>{`Olympic Lifting: ${singleTrainer[0].olympic_lifting}`}</p>
            <p>{`Power Lifting: ${singleTrainer[0].power_lifting}`}</p>
            <p>{`Strongman: ${singleTrainer[0].strongman}`}</p>
            <p>{`Calistenics: ${singleTrainer[0].calisthenics}`} </p>
            <p>{`Cycling: ${singleTrainer[0].cycling}`}</p> 
            <p>{`Functional Fitness: ${singleTrainer[0].functional_fitness}`} </p>
            <p>{`Dance: ${singleTrainer[0].dance}`}</p>
            </center>}
            { this.state.isEditing && <EditTrainer editTrainer={editTrainer} singleTrainer={singleTrainer}/>}
            <button onClick={handleEditChange}>{buttonText}</button>
            <div>
                <ReviewInput />
            </div>
            <div>
                <Reviews reviews={reviews}/>
            </div>
        </div>
    )
}
}

export default SingleTrainer
