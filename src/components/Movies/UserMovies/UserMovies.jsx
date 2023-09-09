import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './UserMovies.module.css'
import routes from '../../Routes/routes.json'

const UserMovies = ()=>{

const [movie,setMovie] = useState([])

const navigate = useNavigate()

  
useEffect(()=>{
   axios.get('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/imagedata').then((data) => {
       
       setMovie(data.data.data)
       
      }).catch((error) => {
        console.log(error)
      })
},[])

  const bookHandler = (id)=>{
    const id1 = id
  
 navigate('/seats', {
  state: {
    id: id1,
    movieData: movie,
  },
})
  }


  
  return(<>
    <div className={styles.moviescontainer}>
      <h2> Movies On Screen</h2>
      <div className={styles.movielist}>
        {movie.map(movie => (
          <div onClick={()=>{bookHandler(movie._id)}} key={movie._id} className={styles.movie}>
              <h4>{movie.name}</h4>
            <br/>
            <hr/>
            <img  style={{ maxHeight: "400px" }} src={movie.poster} alt={movie.title} />
              <button onClick={()=>{bookHandler(movie._id)}} className={styles.bookbutton}>Book Now</button>
          
            
          </div>
        ))}
              </div>
          </div>
  
  
  
  </>)
}

export default UserMovies