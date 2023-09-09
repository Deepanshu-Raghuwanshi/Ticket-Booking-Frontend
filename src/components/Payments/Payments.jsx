import { useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styles1 from './Payments.module.css'
import Button from 'react-bootstrap/Button';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import routes from '../Routes/routes'



const Payments = ()=>{

  const navigate = useNavigate()

const location = useLocation();

  const data = location.state;

  const [payment,setPayment] = useState(false)

  const [data1,setData1] = useState({})

   const [date1,setDate1] = useState('')

  useEffect(()=>{
    
      setData1(data)
    setDate1(data.date)
  })



if (date1 instanceof Date && !isNaN(date1)) {
var formattedDate = date1.toLocaleDateString('en-US', {
  weekday: 'long', 
  year: 'numeric',  
  month: 'long',    
  day: 'numeric',   
 })
} else {
  console.error('Invalid date:', date1);
}
    
   const [card, setCard] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiry, setExpiry] = useState('')

const paymentHandler =()=> {
   const cvv1 = cvv.trim(" ")
  const expiry1 = expiry.trim(" ")
  const card1 = card.trim(" ")
  if(cvv1.length!=3){
    alert('Enter 3 digit CVV')
  }else if(card1.length!=12){
    alert('Enter 12 Digit Card Number')
  }else if (!expiry1){
    alert('Select Valid Date')
      }else{
    setPayment(!payment)
      }
  
}


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Movie Name :{data1.name} </Text>
         <Text>Show Time:{data1.showtime} </Text>
         <Text>Ticket Price :{data1.totalAmount} </Text>
         <Text>Show Date :{formattedDate} </Text>
          <Text>Seats :{data1.seats} </Text> 
             </View>
    </Page>
  </Document>
);

const generatePDF = () => {
    const pdfBlob = PDFDocument.toBlob();

   
    const pdfUrl = URL.createObjectURL(pdfBlob);

    
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'sample.pdf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  
    URL.revokeObjectURL(pdfUrl);
  };




  


  

  return(<>

    {data1 && (<>
      <div>
        <br />
        <h4>Ticket Details</h4>
              </div>
      <div className={styles1.container}>
        <table className={styles1.movieshowtable}>
          <thead>
            <tr>
              <th colSpan="2">Movie Show Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Movie Name:</td>
              <td>{data1.name}</td>
            </tr>
            <tr>
              <td>Show Time:</td>
              <td>{data1.showtime}</td>
            </tr>
            
            <tr>
              <td>Ticket Price:</td>
              <td>{data1.totalAmount} Rs</td>
            </tr>

             <tr>
              <td>Seat Number:</td>
              <td>{data1.seats} </td>
            </tr>
            
            <tr>
              <td> Show Date:</td>
              <td>  
                 {formattedDate}  
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>)}


   <div className="container">
      <br />
      <h3 className="text-center">Complete Payments For Booking</h3>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="col-md-8 col-lg-6 col-xs-12">
          <div className="card px-4">
            <div className="card-body">
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase"> Payments</h2>
                <div className="mb-3">
                 
                    
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Card No.</label>
                      <input
                        type="number"
                        className="form-control"
                        id="username"
                        placeholder="Card No."
                        value={card}
                        onChange={(e) => {setCard(e.target.value)}}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">CVV No.</label>
                      <input
                        type="number"
                        className="form-control"
                        id="password"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => {setCvv(e.target.value)}}
                      />
                    </div>

                   <div className="mb-3">
                      <label htmlFor="password" className="form-label"> Card Expiry Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="password"
                        placeholder="Expiry Date"
                        value={expiry}
                        onChange={(e) => {setExpiry(e.target.value)}}
                      />
                    </div>
                                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  <Button onClick={paymentHandler} className="me-2" variant="warning">Complete Payment</Button>
   
    
<hr/>
<br/>
  <br/>

  
    {!payment &&(
  <>
  <h3>Complete Payment To Download Ticket</h3>
  </>
    )
      
    }
    

  {payment &&(<>
  <h4>Save Your Ticket From Here</h4>
    <div>
                 <PDFViewer width="100%" height={500}>
        <PDFDocument />
      </PDFViewer>
    </div>
  </>)
    
  }

    
  </>)
}

export default Payments