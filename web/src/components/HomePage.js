import Container from "react-bootstrap/esm/Container";
import {Row, Col} from 'react-bootstrap';
import lily from '../images/lily.png';
import vertical from '../images/vertical.png';
import s from '../images/small.jpg';
import c from '../images/t.jpg';
function HomePage(){

     
     const height = window.outerHeight;
     // console.log(height/2);
     // let text = window.outerHeight;
     // console.log(text);
     const frameStyle = {
          // width: "85%",
          height:height*0.7+"px",
          margin:"auto",
          backgroundImage: `url(${c})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: "20px"

     }

     const colorRBG = "#8d99ae";
     const englishStyle = {
          fontFamily: "'Hubballi', cursive",
          color:colorRBG,
          fontSize:"x-large",
          fontWeight:"bold",
          textAlign:"center"
          // margin:"auto"
          // float:"right"
     }

     const chineseStyle = {
          fontFamily: "'ZCOOL QingKe HuangYou', cursive",
          color: "#6a994e",
          textAlign:"center"
          // margin:"auto"
          // float:"left "
     }
     return (
          <div style={frameStyle} className="grid">
               <Container style={{margin:"auto", height:height+"px"}}>
                    <h4 style={{fontSize:"x-large",fontWeight:"bold",  fontFamily: "'Hubballi', cursive", marginTop:"20px", color:colorRBG, textAlign:"center"}}>Hi there, I am Lily!</h4>
                    <h4 style={chineseStyle}>嗨你好！</h4>
                    <h4 style={englishStyle}>Hope you are doing well!</h4>
                    <h4 style={chineseStyle}>好久不见 希望一切都好</h4>
                  
                    <h4 style={englishStyle}>In case you don't know me:</h4>
                    <h4 style={chineseStyle}>如果你不认识我：</h4>
                    <h4 style={englishStyle}>I am a CS student living in LA</h4>
                    <h4 style={chineseStyle}>我生活在洛杉矶，计算机科学硕士学习中</h4>
                    <h4 style={englishStyle}>On my way to be a SDE</h4>
                    <h4 style={chineseStyle}>努力的成为一名软件工程师</h4>
                    <br/>
                    <br/>
                    <br/>
                    <h3 style={englishStyle}>Big Fan Of:</h3>
                    <h3 style={englishStyle}>Chess: <a href="https://www.chess.com/member/joshwillbekickedass" target="_blank">Chess Account</a></h3>
                    <h3 style={englishStyle}>Books</h3>
                    <h3 style={englishStyle}>Fitness/Nutrition</h3>
                    

               </Container>
              
          </div>
     )
}

export default HomePage;