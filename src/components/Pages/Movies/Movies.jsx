import styles from './Movies.module.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Movies = ()=>{

const navigate = useNavigate()
  
 const [movie,setMovie] = useState([])

  const navigateHandler = ()=>{
    navigate('/userlogin')
  }

const upcomingMovies = [
  { id: 1, title: 'I Am Groot: Season 2 ', imageUrl: 'https://staticg.sportskeeda.com/editor/2023/08/6fcfe-16913485583819-1920.jpg',Date:'September 6, 2023' },
  { id: 2, title: 'Loki: Season 2 ', imageUrl: 'https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/07/31094131/LOKI_S2_Digital_KA_600x314.jpg',Date:'October 6, 2023' },
   { id: 3, title: 'The Marvels ', imageUrl: 'https://deadline.com/wp-content/uploads/2023/07/The-Marvels.jpg?w=681&h=383&crop=1',Date:'November 10, 2023' },
   { id: 4, title: 'Captain America: Brave New World ', imageUrl: 'https://images05.military.com/sites/default/files/styles/full/public/2023-06/1time%20captain%20america%204%201200.jpg?itok=mVS15k4v',Date:'July 26, 2024' },
   { id: 5, title: 'Deadpool 3 ', imageUrl: 'https://preview.redd.it/5e1utzm5i0t91.jpg?width=1080&crop=smart&auto=webp&s=eeb43e146fcaa58898619c3ca08e48e1ea23deaa',Date:'May 3, 2024' },
  { id: 6, title: ' Thunderbolt ', imageUrl: 'https://posterspy.com/wp-content/uploads/2022/06/thunderbolts-concept-by-rahalarts.jpg',Date:'December 20, 2024' },
];


useEffect(()=>{
   axios.get('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/imagedata').then((data) => {
       
       setMovie(data.data.data)
       
      }).catch((error) => {
        console.log(error)
      })
},[])
  



  
  return(<>

 <div className={styles.moviescontainer}>
      <h2> Movies On Screen</h2>
      <div className={styles.movielist}>
        {movie.map(movie => (
          <div onClick={navigateHandler} key={movie._id} className={styles.movie}>
              <h4>{movie.name}</h4>
            <br/>
            <hr/>
            <img  style={{ maxHeight: "400px" }} src={movie.poster} alt={movie.title} />
          
            
          </div>
        ))}
        
      </div>
       <hr/>
        <button onClick={navigateHandler} className={styles.bookbutton}>Book Ticket</button> 
       <hr/>
    </div>
    
 <hr/>


    
   <div className={styles.moviescontainer}>
      <h2>Upcoming Movies</h2>
      <div className={styles.movielist}>
        {upcomingMovies.map(movie => (
          <div key={movie.id} className={styles.movie}>
            <img  style={{ maxHeight: "400px" }} src={movie.imageUrl} alt={movie.title} />
            <br/>
            <hr/>
            <h5>{movie.title}</h5>
              <hr/>
            <p>Releasing On {movie.Date}</p>
          
          </div>
        ))}
            </div>
    </div>
          
    
  
  </>)
}
export default Movies