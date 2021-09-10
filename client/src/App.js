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
  

    // // ADD reviews
    // const addreviews = async(obj) => {
    //   const res = await axios.post('http://localhost:5500/api/trainer/', obj)
    //   this.setState({reviews: [...reviews, ...res.data]})
    // }



    
    

    // select single trainer 
    const selectSingleTrainer = async(id) => {
      const res = await axios.get(`http://localhost:5500/api/trainers/${id}`)
      this.setState({singleTrainer: res.data})
      const resReviews = await axios.get("http://localhost:5500/api/comments")
      const rev = resReviews.data.filter(review => review.trainer_id === parseInt(id))
      this.setState({reviews: rev})
    }

    // clear single trainer
    const clearSingleTrainer = () => {
      this.setState({singleTrainer: null})
    }

    // edit Trainer
    const editTrainer = (id, obj) => {
      console.log(id)
      console.log(obj)
    }

    // Delete reviews
    const deleteReview = async(id) => {
      // await axios.delete(`http://localhost:5500/api/trainer/${id}`)
      this.setState({reviews: reviews.filter(reviews => reviews.comment_id !== id)})
    }

    // Edit review
    const editReview = async(obj) => {
      const newReview = reviews.map(reviews => {
        if(reviews.comment_id === obj.comment_id) {  
            reviews.comment_body = obj.comment_body
        }
        return reviews
      })
      this.setState({reviews: newReview})
      // this.setState({singlereviews: null}) 
      
      
      // let newUpdate = {
      //   reviewss: obj.reviewss
      // }
      // await axios.patch(`http://localhost:4040/api/reviewss/${obj.reviewss_id}`, newUpdate)

    }



    if (loading) {
      return <Loading/>
    }


    if (singleTrainer) {
      return (
        <div>
          <SingleTrainer singleTrainer={singleTrainer}
          clearSingleTrainer={clearSingleTrainer}
          reviews={reviews} deleteReview={deleteReview} editReview={editReview}
          editTrainer={editTrainer}/>
        </div>
      )
    }


    return (
      <div className='container'>
        <h1>Trainers Hubs</h1>
        <Categories trainers={trainers}
        selectSingleTrainer={selectSingleTrainer}/>    
      </div>
    )
  }

}

export default App;
