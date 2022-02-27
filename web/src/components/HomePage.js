import Container from "react-bootstrap/esm/Container";
import {Row, Col} from 'react-bootstrap';
import lily from '../images/lily.png';
import vertical from '../images/vertical.png';
function HomePage(){

     
     const height = window.outerHeight;
     // console.log(height/2);
     // let text = window.outerHeight;
     // console.log(text);
     const frameStyle = {
          width: "85%",
          height:height*0.7+"px",
          margin:"auto",
          backgroundImage: `url(${lily})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'

     }
     return (
          <div style={frameStyle} className="grid">
               <Container style={{margin:"auto", border:"2px black solid"}}>
                    <h3 style={{marginTop:"20px"}}>Hi there, I am Lily!</h3>
                    <h3>嗨你好！</h3>
                    <h3>Hope you are doing well!</h3>
                    <h3>好久不见 希望一切都好</h3>
                    <br/>
                    <br></br>
                    <h3>In case you don't know me:</h3>
                    <h3>如果你不认识我：</h3>
                    <h3>I am a CS student living in LA</h3>
                    <h3>我生活在洛杉矶，计算机科学硕士学习中</h3>
                    <h3>On my way to be a SDE</h3>
                    <h3>努力的成为一名软件工程师</h3>
                    <br/>
                    <br></br>
                    <h3>Big fan of Chess, Fitness and Cooking</h3>

               </Container>
              
          </div>
     )
}

export default HomePage;