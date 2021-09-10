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

    // // Delete reviews
    // const deletereviews = async(id) => {
    //   await axios.delete(`http://localhost:5500/api/trainer/${id}`)
    //   this.setState({reviews: reviewss.filter(reviews => reviews.reviews_id !== id)})
    // }

    // const editreviews = async(obj) => {
    //   const updatedreviews= reviewss.map(reviews => {
    //     if(obj.reviewss_id === reviews.reviewss_id) {
          
    //       reviews.reviewss = obj.reviewss
    //     } return reviews
    //   })
    //   this.setState({reviewss: updatedreviews})
    //   this.setState({singlereviews: null}) 
      
      
    //   let newUpdate = {
    //     reviewss: obj.reviewss
    //   }
    //   await axios.patch(`http://localhost:4040/api/reviewss/${obj.reviewss_id}`, newUpdate)
    // }

    const editTrainer = async (id, fixedTrainer) => {
      this.setState({loading: true})
      const res = await axios.patch(`/api/trainer/${id}`, fixedTrainer)
      console.log("this is res from the patch request", res)
      this.setState({loading: false, singleTrainer: null})
      this.componentDidMount()
    };
    

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

    if (loading) {
      return <Loading/>
    }


    if (singleTrainer) {
      return (
        <div>
          <SingleTrainer singleTrainer={singleTrainer}
          clearSingleTrainer={clearSingleTrainer}
          editTrainer={editTrainer}
          reviews={reviews}/>
        </div>
      )
    }


    return (

    <div className='container'>
      <h1>Trainers Hubs</h1>
      <h2> Be your most fittest self </h2>
      <Categories trainers={trainers}
      selectSingleTrainer={selectSingleTrainer}/>
      {/* <Trainers trainers={trainers}/> */}
    </div> 
  )
}

}
export default App;
