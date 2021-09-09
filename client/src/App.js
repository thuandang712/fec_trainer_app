import React from 'react'
import axios from 'axios';

import './App.css';
import Categories from './components/Categories';
import SingleTrainer from './components/SingleTrainer'
import Loading from './components/Loading';

class App extends React.Component {
  
  state = {
    trainers: [],
    reviews: [],
    loading: false,
    singleTrainer: null,
  };
  

  async componentDidMount () {
    this.setState({loading: true})
    const resTrainers = await axios.get("http://localhost:5500/api/trainers")
    this.setState({trainers: resTrainers.data})
    const resReviews = await axios.get("http://localhost:5500/api/comments")
    this.setState({reviews: resReviews.data})
    this.setState({loading: false})
  };




  render() {

    const { trainers, reviews, singleTrainer, loading } = this.state
  


    // // ADD comment
    // const addComment = async(obj) => {
    //   const res = await axios.post('http://localhost:5500/api/trainer/', obj)
    //   this.setState({comments: [...comments, ...res.data]})
    // }

    // // Delete Comment
    // const deleteComment = async(id) => {
    //   await axios.delete(`http://localhost:5500/api/trainer/${id}`)
    //   this.setState({comments: comments.filter(comment => comment.comments_id !== id)})
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

    
    

    // select single trainer 
    const selectSingleTrainer = async(id) => {
      const res = await axios.get(`http://localhost:5500/api/trainers/${id}`)
      this.setState({singleTrainer: res.data})
    }

    // clear single trainer
    const clearSingleTrainer = () => {
      this.setState({singleTrainer: null})
    }

    if (loading) {
      return <Loading/>
    }


    if (singleTrainer) {
      return (
        <div>
          <SingleTrainer singleTrainer={singleTrainer}
          clearSingleTrainer={clearSingleTrainer}
          reviews={reviews}/>
        </div>
      )
    }


    return (
<<<<<<< HEAD
    <div className='container'>
      <h1>Trainers Hubs</h1>
      <h2> Be your most fittest self </h2>
      <Categories trainers={trainers}/>
      {/* <Trainers trainers={trainers}/> */}
    
    
    </div> 
  )
}
}
export default App;
=======
      <div className='container'>
        <h1>Trainers Hubs</h1>
        <Categories trainers={trainers}
        selectSingleTrainer={selectSingleTrainer}/>    
      </div> 
    )
  }

}

export default App;
>>>>>>> 3a28e7399b59ae076d71776d7b8686d67f60c806
