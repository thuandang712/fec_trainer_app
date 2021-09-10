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
    this.setState({loading: false})
  };


  render() {

    const { trainers, reviews, singleTrainer, loading } = this.state


    // select single trainer - GOOD
    const selectSingleTrainer = async(id) => {
      const res = await axios.get(`http://localhost:5500/api/trainers/${id}`)
      this.setState({singleTrainer: res.data})
      // FILTER reviews belongs to the single trainer
      const resReviews = await axios.get("http://localhost:5500/api/comments")
      const rev = resReviews.data.filter(review => review.trainer_id === parseInt(id))
      this.setState({reviews: rev})
    }

    
    // clear single trainer -- GOOD
    const clearSingleTrainer = () => {
      this.setState({singleTrainer: null})
    }


    // ******** edit Trainer ******************************
    const editTrainer = (id, obj) => {
      console.log(id)
      console.log(obj)
    }



    // ADD reviews -- add data validation

    const addReview = async(obj) => {
      const res = await axios.post('http://localhost:5500/api/comments/', obj)
      this.setState({reviews: [...reviews, ...res.data]})
    }


    // DELETE reviews -- GOOD
    const deleteReview = async(id) => {
      // delete on UI 
      this.setState({reviews: reviews.filter(reviews => reviews.comment_id !== id)})
      // delete on DB 
      await axios.delete(`http://localhost:5500/api/comments/${id}`)
    }


    // EDIT review -- GOOD
    const editReview = async(obj) => {
      const newReview = reviews.map(reviews => {
        if(reviews.comment_id === obj.comment_id) {  
          reviews.comment_body = obj.comment_body
        }
        return reviews
      })
      this.setState({reviews: newReview})
      
      // update on DB
      let newUpdatedReview = {
        comment_body: obj.comment_body,
        trainer_id: obj.trainer_id
      }
      await axios.patch(`http://localhost:5500/api/comments/${obj.comment_id}`, newUpdatedReview)
    }


    // CONDITIONAL RENDERING
    if (loading) {
      return <Loading/>
    }


    if (singleTrainer) {
      return (
        <div>
          <SingleTrainer singleTrainer={singleTrainer}
          clearSingleTrainer={clearSingleTrainer}
          reviews={reviews} addReview={addReview} deleteReview={deleteReview} editReview={editReview}
          editTrainer={editTrainer}/>
        </div>
      )
    }


    return (

    <div className='mainPageContainer'>
      <h1 className="mainHeader">Trainers Hubs</h1>
      <h2 className="secondaryHeader"> Be your most fit self</h2>
      <Categories trainers={trainers}
      selectSingleTrainer={selectSingleTrainer}/>
      {/* <Trainers trainers={trainers}/> */}
    </div> 
  )
}

}

export default App;
