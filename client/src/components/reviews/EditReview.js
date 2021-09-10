import React, { useState } from "react";

const EditReview = ({review, editReview}) => {
    
    // console.log(isEditing)
    const [editText, setEditText] = useState('')
    
    const handleTextChange = (e) => {
        setEditText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedReview = {
            comment_id: parseInt(e.target.id),
            comment_body: editText
        }
        editReview(updatedReview)
        setEditText('')
        // setIsEditing(false)
    }

    return (
        <div>
            <h1>Edit Review</h1>
            <form onSubmit={handleSubmit} id={review.comment_id}>
                <input className="label" type="text" value={editText} onChange={handleTextChange}/>
                <input type="submit" className="btn hover"/>
            </form>
        </div>
    )
}

export default EditReview