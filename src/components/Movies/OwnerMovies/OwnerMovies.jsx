import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import styles from './OwnerMovies.module.css'


const OwnerMovies = () => {

  const posterInputRef = useRef(null);

  const [moviename, setMovieName] = useState('')
  const [totalseat, setTotalSeat] = useState('')
  const [availseat, setAvailSeat] = useState('')
  const [ticketprice, setTicketPrice] = useState('')
  const [showtime, setShowTime] = useState('')
  const [rating, setRating] = useState('')
  const [poster, setPoster] = useState('')
  const [movie, setMovie] = useState([])
  const [delete1, setDelete1] = useState(true)


  useEffect(() => {
    axios.get('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/imagedata').then((data) => {

      setMovie(data.data.data)

    }).catch((error) => {
      console.log(error)
    })
  }, [delete1])



  const addHandler = () => {
    const moviename1 = moviename.trim(' ')
    const totalseat1 = totalseat.trim(' ')
    const availseat1 = availseat.trim(' ')
    const showtime1 = showtime.trim(' ')
    const ticketprice1 = ticketprice.trim(' ')
    const rating1 = rating.trim(' ')


    if (moviename1.length == 0) {
      alert('Enter Valid  Movie Name')
    } else if (totalseat1.length == 0) {
      alert('Enter Valid Seats')
    } else if (rating1.length == 0 || rating < 0 || rating > 5) {
      alert('Enter Rating Under 5')
    } else if (!poster) {
      alert('Select Poster')
    } else if(showtime1.length ==0){
      alert('Select Show Time')
    }else if(ticketprice1.length ==0){
      alert('Enter Ticket Price')
    }else if(availseat1.length ==0){
      alert('Enter Ticket Price')
    } else {

      const formData = new FormData();
      formData.append('name', moviename1);
      formData.append('totalseats', totalseat1)
      formData.append('rating', rating1)
      formData.append('poster', poster)
      formData.append('showtime', showtime1)
      formData.append('ticketprice', ticketprice1)
      formData.append('availableseats', availseat1)

      axios.post('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/imagesave', formData, { headers: { "Content-Type": 'multipart/form-data', } }).then((data) => {
      
        alert(data.data.message)
        setMovieName('')
        setTotalSeat('')
        setRating('')
        setAvailSeat('')
        setTicketPrice('')
        setShowTime('')
        posterInputRef.current.value = '';
        setDelete1(!delete1)
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  const deleteHandler = (id) => {
   
    const data = {
      id: id,
    }
    axios.post('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/delete', data, { headers: { "Content-Type": 'application/json', } }).then((data) => {

      alert(data.data.message)
      setDelete1(!delete1)
    }).catch((error) => {
      console.log(error)
    })
  }



  return (<>
    <br />
    <h2>Owners Page</h2>
    <div className="container">
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <div className="card px-4">
            <div className="card-body">
              <div className="mb-2 mt-md-2">
                <h2 className="fw-bold mb-2 text-center "> Add Movie</h2>
                <hr />
                <div className="mb-3">

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"> Movie Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Movie Name"
                      value={moviename}
                      onChange={(e) => { setMovieName(e.target.value) }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Seats</label>
                    <input
                      type="number"
                      className="form-control"
                      id="username"
                      placeholder="Enter Seats"
                      value={totalseat}
                      onChange={(e) => { setTotalSeat(e.target.value) }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Available Seats</label>
                    <input
                      type="number"
                      className="form-control"
                      id="username"
                      placeholder="Enter Seats"
                      value={availseat}
                      onChange={(e) => { setAvailSeat(e.target.value) }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="username"
                      placeholder="Ticket Price"
                      value={ticketprice}
                      onChange={(e) => { setTicketPrice(e.target.value) }}
                    />
                  </div>


                  <div className="mb-3">
                    <hr />
                    <label htmlFor="showTime">Show Time:</label>
                    <hr />
                    <br />
                    <select id="showTime" value={showtime} onChange={(e) => { setShowTime(e.target.value) }}>
                      <option value="">Select a Show Time</option>
                      <option value="12AM-3AM">12 AM - 3 AM</option>
                      <option value="3AM-6AM">3 AM - 6 AM</option>
                      <option value="6AM-9AM">6 AM - 9 AM</option>
                      <option value="9AM-12PM">9 AM - 12 PM</option>
                      <option value="12PM-3PM">12 PM - 3 PM</option>
                      <option value="3PM-6PM">3 PM - 6 PM</option>
                      <option value="6PM-9PM">6 PM - 9 PM</option>
                      <option value="9PM-12AM">9 PM - 12 AM</option>
                    </select>
                    <hr />
                 
                  </div>


                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Rating</label>
                    <input
                      type="number"
                      className="form-control"
                      id="password"
                      placeholder="Rating"
                      value={rating}
                      onChange={(e) => { setRating(e.target.value) }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="poster" className="form-label">Poster</label>
                    <input
                      type="file"
                      className="form-control"
                      id="poster"
                      placeholder="image"
                      ref={posterInputRef}
                      onChange={(e) => { setPoster(e.target.files[0]) }}
                    />
                  </div>
                  <div className="d-grid">
                    <button onClick={addHandler} className="btn btn-primary" >Add Movie To Cineplex</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
          <br/>
     <br/>
    <hr />
    <h3>Movies In Your Cineplex</h3>

    {movie && movie.map((ele) => (
      <div key={ele.id} className={styles.namebox}>
        <div className={styles.name}>{ele.name}</div>
        <hr />
        <div className={styles.buttoncontainer}>
          <Button onClick={(id) => deleteHandler(ele._id)} variant="danger" className={styles.deletebutton}>
            Delete
          </Button>
        </div>
      </div>
    ))}

    <br />
    <br />
    <br />
    <br />



  </>)
}
export default OwnerMovies