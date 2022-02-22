import Container from "react-bootstrap/esm/Container";
import {Col} from 'react-bootstrap'
function HomePage(){

     const height = window.innerHeight;
     console.log(height/2);
     const frameStyle = {
          border:"solid 2px gray",
          width: "85%",
          height:height*2/3+"px",
          margin:"auto"
     
     }
     return (
          <div style={frameStyle}>
               <Container>
                    <Col></Col>
                    <Col></Col>
               </Container>
          </div>
     )
}

export default HomePage;