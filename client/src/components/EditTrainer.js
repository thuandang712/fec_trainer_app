import React from 'react'

class EditTrainer extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        bodybuilding: false,
        running: false,
        power_lifting: false,
        swimming: false,
        cycling: false,
    }

    componentDidMount() {
        this.setState({...this.props.singleTrainer[0]})
    }

    render() {
        window.global = this.state
        const{editTrainer, singleTrainer} = this.props

        const handleChange = (e) => {
            // console.log("Im updating this thing")
            const key = e.target.name //key should be the names of the elements; firstName, lastName, phoneNumber, etc.
            
            let value;
            if (e.target.type === "checkbox"){
                value = e.target.checked
            } else {
                value = e.target.value
            }
            this.setState({[key]: value})
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state)
            const obj = this.state
            editTrainer(singleTrainer[0].trainer_id, obj)
        }
    

    return (
        <center>
        <form className = 'add-Form' onSubmit={handleSubmit} id={singleTrainer[0].trainer_id}>
            <div className= 'form-control'>
                <label>First Name</label>
                <input type='text' placeholder='First Name'
                name = "first_name"
                value= {this.state.first_name}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control'>
                <label>Last Name</label>
                <input type='text' placeholder='Last Name'
                name= "last_name"
                value= {this.state.last_name}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control'>
                <label>Phone Number</label>
                <input type="text" placeholder='Phone Number'
                name= "phone_number"
                value= {this.state.phone_number}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control'>
                <label>Email</label>
                <input type='text' placeholder='Email'
                name= "email"
                value= {this.state.email}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Bodybuilding</label>
                <input type='checkbox'
                name = "bodybuilding"
                checked={this.state.bodybuilding}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Running</label>
                <input type='checkbox'
                name = "running"
                checked={this.state.running}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Power Lifting</label>
                <input type='checkbox'
                name = "power_lifting"
                checked={this.state.power_lifting}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Swimming</label>
                <input type='checkbox'
                name = {"swimming"}
                checked={this.state.swimming}
                onChange={handleChange}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Cycling</label>
                <input type='checkbox'
                name = "cycling"
                checked={this.state.cycling}
                onChange={handleChange}/>
            </div>
            <button className="ui button" type="submit" value='Edit Trainer'>Submit</button>
        </form>
        </center>
    )
    }

}



export default EditTrainer