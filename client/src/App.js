import './App.css';
import React from 'react'
import axios from 'axios';
<<<<<<< HEAD
import Trainers from './components/Trainers';
import Categories from './components/Categories';
import Loading from './components/Loading';
=======
import Categories from './components/Categories';
>>>>>>> 0146647813c8778e6435218ca7c0807d428dee92

class App extends React.Component {
  
  state = {
    trainers: [],
    loading: false,
    singleTrainer: null,
  };

  // add something here 
  
  async componentDidMount () {
    this.setState({loading: true})
    const res = await axios.get("http://localhost:5500/api/trainers")
    this.setState({loading: false, trainers: res.data})
  };

  render() {

<<<<<<< HEAD
    const { trainers, singleTrainer, loading } = this.state
=======
    const { trainers } = this.state
>>>>>>> 0146647813c8778e6435218ca7c0807d428dee92
    
    // // ADD comment
    // const addComment = async(obj) => {
    //   const res = await axios.post('http://localhost:5500/api/trainer/', obj)
    //   this.setState({comments: [...comments, ...res.data]})
    // }
    // // select comment
    // const selectSingleComment = async(id) => {
    //   const res = await axios.get(`http://localhost:5500/api/trainer/${id}`)
    //   this.setState({singleComment: res.data})
    // }

    // // Delete Comment
    // const deleteComment = async(id) => {
    //   await axios.delete(`http://localhost:5500/api/trainer/${id}`)
    //   this.setState({comments: comments.filter(comment => comment.comments_id !== id)})
    // }

    // // Clear single comment
    // const clearSingleComment = () => {
    //   this.setState({singleComment: null})
    // }

    // const editComment = async(obj) => {
    //   const updatedComment= comments.map(comment => {
    //     if(obj.comments_id === comment.comments_id) {
          
    //       comment.comments = obj.comments
    //     } return comment
    //   })
    //   this.setState({comments: updatedComment})
    //   this.setState({singleComment: null}) 
      
      
    //   let newUpdate = {
    //     comments: obj.comments
    //   }
    //   await axios.patch(`http://localhost:4040/api/comments/${obj.comments_id}`, newUpdate)
    // }

    // // Conditional Rendering
    // if(singleComment) {
    //   return (
    //     <div className="container">
    //       <SingleComment 
    //       singleComment={singleComment} 
    //       clearSingleComment={clearSingleComment}
    //       editComment={editComment}
    //       />
    //     </div>
    //   )
    // }
    
     
    
      
    

    return (
    <div className='container'>
      <h1>Trainers Hubs</h1>
<<<<<<< HEAD
      <h2> Fitness Happens One Step At A Time </h2>
      <Categories/>
      
=======
      <Categories trainers={trainers}/>
>>>>>>> 0146647813c8778e6435218ca7c0807d428dee92
      {/* <Trainers trainers={trainers}/> */}
    
    
    </div> 
  )
}
}


export default App;
