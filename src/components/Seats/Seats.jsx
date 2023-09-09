import { useLocation } from 'react-router-dom';
import styles from "./Seats.module.css"
import { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import routes from '../Routes/routes'
const Seats = () => {

const navigate = useNavigate()
  
const location = useLocation();

  const id = location.state.id;

  const data = location.state.movieData;

  const currentDate = new Date();

  const [finalData,setFinalData] = useState([])

 

  const [seatUpdate,setSeatUpdate] = useState(true)

  const [selectedSeats, setSelectedSeats] = useState([]);

  const [selectedDate, setSelectedDate] = useState(currentDate);

  
useEffect(()=>{
 axios.post('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/getdatabyid', {id:id}, { headers: { "Content-Type": 'application/json', } }).then((data) => {
   setFinalData(data.data.data)
                         }).catch((error) => {
        console.log(error)
      })
  },[seatUpdate])


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

 
  const name = finalData.name
  const poster = finalData.poster
  const showTime = finalData.showtime
  const ticketPrice = finalData.ticketprice
  const totalseats = finalData.totalseats
  var availableseats = finalData.availableseats
   let rating = finalData.rating
  const id1 = finalData._id




  const totalTicket = selectedSeats.length

  const totalPrice = totalTicket * ticketPrice

  const dataToNavigate = {
    name:name,
    showtime:showTime,
    totalAmount:totalPrice,
    seats:selectedSeats.join(', '),
    date:selectedDate
    
  }


  
  const handleSeatClick = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((seat) => seat !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };


  const renderSeats = () => {
    const totalSeats = availableseats;
    const seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      const isSeatSelected = selectedSeats.includes(i);
      seats.push(
        <div
          key={i}
          className={`${styles.seat} ${isSeatSelected ? styles.selected : ''}`}
          onClick={() => handleSeatClick(i)}
        >
          {i}
        </div>
      );
    }
    return seats;
  };

  
const paymentHandler = ()=>{
alert('Check Show Date Carefully In Ticket')
  const availSeats = availableseats-totalTicket
  const data = {seats:availSeats,
               id:id1}
 axios.post('https://ticket-booking-dipanshuraghuwa.december-node-2022.repl.co/movie/updateseats', {data:data}, { headers: { "Content-Type": 'application/json', } }).then((data) => {
  
   setSeatUpdate(!seatUpdate)
        alert(data.data.message)
   setSelectedSeats([])
      renderSeats()
   navigate('/payments',{state:dataToNavigate})
              }).catch((error) => {
        console.log(error)
      })
  }


  return (<>
    <br/>
<div   >
<img style={{ maxHeight: "400px" }} src={poster}/>
</div>

    
    {finalData && (<>
      <div>
        <br />
        <h4>Select Show Date</h4>
        <DatePicker selected={selectedDate} onChange={handleDateChange} minDate={new Date()} />
      </div>
      <div className={styles.container}>
        <table className={styles.movieshowtable}>
          <thead>
            <tr>
              <th colSpan="2">Movie Show Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Movie Name:</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Show Time:</td>
              <td>{showTime}</td>
            </tr>
            <tr>
              <td>Available Seats:</td>
              <td>{availableseats}</td>
            </tr>
            <tr>
              <td>Total Seats:</td>
              <td>{totalseats}</td>
            </tr>
            <tr>
              <td>Ticket Price:</td>
              <td>{ticketPrice} Rs</td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td>
                               {rating}/5

              </td>
            </tr>
            <tr>
              <td>Selected Show Date:</td>
              <td>  {selectedDate && (
                <p> {selectedDate.toDateString()}</p>
              )}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>)}
    <hr />

    <div className={styles.seatbooking}>
      <h1>Select Seats</h1>
      <hr />
      <div className={styles.seatcontainer}>{renderSeats()}</div>
      <hr />
      <p><h1>Selected Seats: {selectedSeats.join(', ')}</h1></p>
      <hr />
    </div>

    {totalPrice > 0 && (

      <>
        <h5>Your Ticket Details</h5>
        <div className={styles.container}>
          <table className={styles.movieshowtable}>
            <thead>
              <tr>
                <th colSpan="2">Ticket</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Movie Name:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Show Time:</td>
                <td>{showTime}</td>
              </tr>
              <tr>
                <td>Seat No.</td>
                <td> {selectedSeats.join(', ')}</td>
              </tr>

              <tr>
                <td>Total Amount:</td>
                <td>{totalPrice}Rs</td>
              </tr>

              <tr>
                <td> Date:</td>
                <td>  {selectedDate && (
                  <p> {selectedDate.toDateString()}</p>
                )}</td>
              </tr>

            </tbody>

          </table>

        </div>
        <br />
        <Button onClick={paymentHandler} variant="success">Make Payment</Button>
      </>
    )

    }
    {!totalPrice && (
      <h4> No Seats Selected</h4>
    )
    }
    <br />

    <br />
    <br />

  </>)

}

export default Seats;