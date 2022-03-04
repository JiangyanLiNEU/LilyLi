import {Container} from "react-bootstrap";
import { Checkbox, Rating } from '@mui/material';
import { Accordion } from "react-bootstrap";
import h from '../images/horizonal.png'
export const Blog = () => {
     const height = window.innerHeight;
     const width = window.innerWidth;
     const frameStyle = {
          backgroundImage:`url(${h})`,
          backgroundSize:"90%",
          backgroundPosition:"center",
          repeat:"no-repeat",
          // border:"2px solid black",
          // height:height*0.8+'px',
          width:width*0.95+"px",
          margin:"auto",
     }
     const sectionStyle = {
          // border:"1px dotted red",
          width:"90%",
          margin:"10px 5% 10px 5%",
          padding:"10px",
          fontFamily: "'Syne Mono', monospace"

     }

     const languageItem = (language, level) => {
          return (
               <div>
               <span style={{color:"#6a994e",fontSize:"20px", marginLeft:"10px", marginRight:"10px",padding:"5px"}}>{language}</span>
               <Rating style={{margin:"15px"}}
               name="read-only"
               value={level}
               readOnly/>
               </div>
          )
     }

     let eventKey = -1;
     const TechItem = (title, describe) => {
          eventKey += 1
          return (
               <Accordion.Item eventKey={""+eventKey}>
                    <Accordion.Header style={{fontFamily: "'Syne Mono', monospace"}}><span style={{color:"#6a994e",fontSize:"20px",}}>{title}</span></Accordion.Header>
                    <Accordion.Body style={{fontFamily: "'Syne Mono', monospace"}}>
                         <ul>
                              {describe.map(ele => <li>{ele}</li>)}
                         </ul>
                    </Accordion.Body>
               </Accordion.Item>
          )
     }

    
     return (
          <div style={frameStyle}>
               
               <Container style={sectionStyle}>
                    <h1>Tech skills</h1>
                    <Accordion>
                         {TechItem("Web Developement", ["Frontend Framework: React, Redux", "DataBase: MongoDB, SQL, PostgreSQL", "Backend: Django, Express, Node.js"])}
                         {TechItem("Cloud Computing", ["AWS", "CI/CD pipline", "Beanstalk", "Docker"])}
                         {TechItem("Android Mobile Development", ["Android Studio", "Java"])}
                         {TechItem("Machine Learning", ["Tool: Numpy, Pandas, PyTorch", "Models: Decision Tree, Regression, K Means Clustering, SVM, Naive Bayer, Random Forest"])}
                         {TechItem("Distributed System", ["TCP/UDP", "RMI", "Socket"])}
                    </Accordion>
               </Container>

               <Container style={sectionStyle}>
                    <Container>
                         <h1>Language skills</h1>
                         {languageItem("Chinese (Native)", 5)}
                         {languageItem("English (Proficient)", 4)}
                         {languageItem("German  (Fluent)", 2)}
                    </Container>
               </Container>

               
               <Container style={sectionStyle}>
                    <h1>Hobby</h1>
                    <Accordion style={{}}>
                    {TechItem("Fitness/Nutrition", ["I did a Marathon when I was 20 years old! But I hated running afterwards..", "Josh and I have been doing Staturday Morning 40 minutes jogging Since Feb 2022. It feels great!","I also do Strength Training regularly.","I love trying new food and keep nutrition-balanced diet.", "Unfortunatly Josh hates my ULTRA healthy creation sometimes!"])}
                         {TechItem("Chess", ["5 mins chess is my favoriate! Let's play together!","Find me https://www.chess.com/member/joshwillbekickedass"])}
                         {TechItem("Travel",["Travel a lot in US", "Three months in South America"])}
                         {TechItem("Plant", ["I love having plants in my apartment!", "I am taking care of one Money tree, two Avocado tree, two Monstera, three Benjamin Fig,  in my apartment!"])}
                         {TechItem("Book/Movie/Social Media", ["Recent Book Fav: 人生未完成， Before I met you", "Recent Movie Fav: House of Gucci, Mrs.Doubtfire", "Run a VLOG channel: Update once a year -- I should do a better job..."])}
                         {TechItem("Photography", ["I love doing Potrait Photograph!"])}  
                    </Accordion>
               </Container>
          </div>
     )
}