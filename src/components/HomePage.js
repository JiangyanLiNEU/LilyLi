import Container from "react-bootstrap/esm/Container";
import t from '../images/t.jpg';
export const HomePage = () => {
     const height = window.innerHeight;
     const frameStyle = {
          height:height*0.8+"px",
          margin:"auto",
          backgroundImage: `url(${t})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: "20px",
          marginTop:"50px"
     }

     const englishStyle = {
          // fontFamily: "'Hubballi', cursive",
          fontFamily: "'Syne Mono', monospace",
          color:"#8d99ae",
          fontSize:"x-large",
          fontWeight:"bold",
          textAlign:"center"
     }

     const chineseStyle = {
          fontFamily: "'Ma Shan Zheng', cursive",
          color: "#6a994e",
          textAlign:"center"
          // margin:"auto"
          // float:"left "
     }
     return (
          <div style={frameStyle} className="grid"><br/><br/>
               <Container style={{margin:"auto", height:height+"px"}}>
                    <h4 style={englishStyle}>Hi there, I am Lily!</h4>
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
                    {/* <h3 style={englishStyle}>Big Fan Of:</h3>
                    <h3 style={englishStyle}>Chess: <a href="https://www.chess.com/member/joshwillbekickedass" target="_blank">Chess Account</a></h3>
                    <h3 style={englishStyle}>Books</h3>
                    <h3 style={englishStyle}>Fitness/Nutrition</h3> */}
                    

               </Container>
              
          </div>
     )
}