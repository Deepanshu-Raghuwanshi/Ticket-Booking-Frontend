import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import routes from './../Routes/routes.json'
import {  useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import {useState,useEffect} from 'react'
import { useNavigate} from 'react-router-dom';

const SignupHeader = ()=>{

  const [oname,setOname] = useState('')
  
   const navigate = useNavigate()

  const [uname,setUname] = useState('')

 const name1 = useSelector((state) => {
     
    return (state.user.Oname)
  })

   const name2 = useSelector((state) => {
   
    return (state.user.Uname)
  })

  
  useEffect(()=>{
     setOname(name1)
    setUname(name2)
  },[name1,name2])


const logoutHandler = ()=>{
  setOname('')
  setUname('')
  navigate('/')
}
  

  return(<>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h3>The Marvels Cineplex</h3></Navbar.Brand>
        <Navbar.Toggle />
        {!oname && (
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Owner Signup/Login :  <a href="/ownersignup">Here</a>
          </Navbar.Text>
        </Navbar.Collapse> 
        )
         
        }
         {oname && (
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Owner : {oname} || 
          </Navbar.Text>
       
         <Navbar.Text>
            <Button onClick={logoutHandler} variant="danger">Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse> 
        )
          
        }
       
      </Container>
    </Navbar>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="/movies">Movies</Nav.Link>
              <Nav.Link href="/play">Plays</Nav.Link>
              <Nav.Link href="/food">Food</Nav.Link>
                       <Nav.Link href="/contactus">ContactUs</Nav.Link>
            
          </Nav>
          {!uname && (
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User Signup/Login : <a href="/usersignup">Here</a>
          </Navbar.Text>
        </Navbar.Collapse> 
        )
         
        }
         {uname && (
      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User :  {uname} || 
          </Navbar.Text>
       
         <Navbar.Text>
          
           <Button onClick={logoutHandler} variant="danger">Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse> 
        )
          
        } 
        </Container>
      </Navbar>
 


  
  </>)
}
export default SignupHeader;