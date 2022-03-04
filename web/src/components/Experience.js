import 'react-vertical-timeline-component/style.min.css'
// import Timeline from "@mui/material"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/esm/Container';
import f from '../images/f.jpg'
function Experience(){
     
     const height = window.innerHeight;
     console.log(height)
     const width = window.innerWidth;

     const getP = (time, position, company, content) => {
       return {
         date: time,
         posi: position,
         name: company,
         describe: content
       }
     }

     const getAll = () => {
       let result = []
       result.push(getP("Sep - Dec 2022", "Software Intern", "Tiktok", "Work with front end team in US to develop Tiktok website"));
       result.push(getP("June - Sep 2022", "Software Intern", "Amazon", "Still waiting to know the team"))
       result.push(getP("May - June 2022", "Software Intern", "Akuna Capital", "Work in UI team"))
       result.push(getP("Feb - May 2022", "CSRMP fellow", "Google", "Explore cs research with Google Mentor"))
       result.push(getP("May 2021 - Present", "TA", "Northeastern University", "TA for CS5008 and CS5800"))
       result.push(getP("2020 - 2023", "MSCS", "Northeastern University", "Major in CS"))
       result.push(getP("2015 - 2019", "BS in Biology", "Tianjin University", "Studied Biology in undergraduate"))
       return result;
      }
    const positions = getAll();
    

    const generateOne = (obj, LeftOrRight) => {
      console.log("Inside generateOne");
      return (
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align={LeftOrRight}
          variant="body2"
          color="#6a994e"
          style={{fontFamily: "'Syne Mono', monospace"}}
        >
          {obj.date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot >
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '10px', px: 2 }}>
          <Typography style={{fontFamily: "'Syne Mono', monospace"}} variant="h6" fontSize="20px" component="span"  color="#9b2226">
          {obj.posi}
          </Typography>
          <br/>
          <Typography style={{fontFamily: "'Syne Mono', monospace"}} variant="h6" fontSize="18px" component="span" color="#9b2226">
          {obj.name}
          </Typography>
          {/* <Typography>{obj.describe}</Typography> */}
        </TimelineContent>
      </TimelineItem>
      )
    }

    const style = {
      // border:"2px black solid",
      width:width,
      margin:"auto",
      height:height*0.85+"px",
      backgroundImage: `url(${f})`,
      backgroundPosition: 'top',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat'
    }
     return (
          <div style={style}>
            <Timeline position="alternate">
              {positions.map((ele,index)=>generateOne(ele,index%2===0?'right':'left'))}
            </Timeline></div>
     )
}

export default Experience;