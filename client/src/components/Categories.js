import React from 'react'

class Categories extends React.Component {

    render() {

        const {trainers} = this.props

        return (
            <div className='container'>
                <h2>{trainers}</h2>

                
            </div>
        )
    }
}

export default Categories
