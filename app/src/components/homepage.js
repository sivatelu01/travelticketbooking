import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Button } from 'react-bootstrap';
import './homepage.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
function Homepage() {
  return (
    <div className="background">
      <Nav style={{backgroundColor:"#B0E0E6"}} fixed="top">
        <Nav.Item style={{marginLeft:630}} >
          <Nav.Link style={{color:'#413839',fontSize:30}}>Home</Nav.Link>
        </Nav.Item>
      </Nav>
       <div className="content">
                <h1 style={{fontSize:50}}>TRAVEL TO EXPLORE</h1>
                <p style={{fontSize:20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Facerenatus,enim ipsam magnam odit deserunt itaque? Minima earum velittenetur!
                </p>
                <br/>
                <Link to={'places'}><Button className="B1">Explore</Button></Link>
        </div>
    </div>
  );
}

export default Homepage;