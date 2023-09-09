import SignupHeader from '../Headers/SignupHeader'
import Carousel from 'react-bootstrap/Carousel';
import styles from './Home.module.css'
import routes from './../Routes/routes.json'
import { useNavigate } from 'react-router-dom';
const Home =  ()=>{

const navigate = useNavigate()

  const contactUsHandler = ()=>{
    navigate('/contactus')
  }

   const foodHandler = ()=>{
    navigate('/food')
  }

   const playHandler = ()=>{
    navigate('/play')
  }
  
    const movieHandler = ()=>{
    navigate('/movies')
  }


  
  return(<>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTc0NDkwNzM2NTM4OTUzMzUw/top-10-best-marvel-movies-you-should-watch.webp"
      alt="First slide"
        style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h3>Avengers Endgame</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lumiere-a.akamaihd.net/v1/images/captain-marvel-poster_50099863.jpeg?region=0,64,600,337"
      alt="Second slide"
        style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h3> Captain Marvel</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static1.srcdn.com/wordpress/wp-content/uploads/2018/03/Avengers-Infinity-War-official-poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
      alt="Third slide"
      style={{ maxHeight: "400px" }}
    />
    <Carousel.Caption>
      <h3>Avengers Infinity War</h3>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br/>
    <hr/>
    <h3>Welcome To Movie Universe</h3>
<hr/>
    <div class={styles.servicescontainer}>
  <h2 class={styles.subheading}>Services</h2>
  <div class={styles.servicesboxes}>
    <div  onClick={movieHandler} class={styles.servicebox}>
      <h3>Movies</h3>
    </div>
    <div onClick={foodHandler} class={styles.servicebox}>
      <h3>Food</h3>
    </div>
    <div onClick={playHandler} class={styles.servicebox}>
      <h3>Plays</h3>
    </div>
    <div onClick={contactUsHandler} class={styles.servicebox}>
      <h3>Contact Us</h3>
    </div>
  </div>
</div>

  </>)
}
export default Home