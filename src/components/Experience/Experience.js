import './Experience.css';

import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

const Experience = () => {
    const useStyles = makeStyles((theme) => ({
        dot: {
          width: '20px',
          height: '20px',
          color: '#FFFFFF',
        },
        role: {
            fontSize: '22px',
            fontWeight: 'bold',
            // whiteSpace: 'nowrap',
        },
        time: {
            color: '#E5E5E5',
        },
        place: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: '20px',
        },
        description: {
            color: '#FFFFFF',
            paddingTop: '20px',
            paddingBottom: '50px',
        }
      }));
      const classes = useStyles();
      

    return ( 
        <div className="experience-page">
            <div className="experience-container">
                <p id="title">Experience</p>

                <div className="timeline-container">
                    <Timeline >
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography className={classes.role}><span className="role">Backend Developer</span></Typography>
                            <Typography className={classes.time}><span className="date">March 2021 - June 2021</span></Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className={classes.dot}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography className={classes.place}>
                                <a href="https://www.linkedin.com/company/include-davis">#include @ Davis</a>
                            </Typography>
                            <Typography className={classes.description}><span className="description">I took part in quarterly projects where we worked 
                            in teams to build websites from scratch for local nonprofits. For the frontend, 
                            I worked with JavaScript/HTML/CSS and reactjs. For the backend, I worked with
                            node and express. I worked alongside fellow developers and designers to ensure
                            the quality of the websites.</span></Typography>
                        </TimelineContent>
                        </TimelineItem>


                        <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography className={classes.role}><span className="role">Frontend Developer</span></Typography>
                            <Typography className={classes.time}><span className="date">October 2020 - March 2021</span></Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className={classes.dot}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography className={classes.description}><span className="description">I took part in quarterly projects where we worked 
                            in teams to build websites from scratch for local nonprofits. For the frontend, 
                            I worked with JavaScript/HTML/CSS and reactjs. For the backend, I worked with
                            node and express. I worked alongside fellow developers and designers to ensure
                            the quality of the websites.</span></Typography>
                        </TimelineContent>
                        </TimelineItem>

        
                        <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography className={classes.role}><span className="role">Frontend Developer</span></Typography>
                            <Typography className={classes.time}><span className="date">October 2020 - March 2021</span></Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot className={classes.dot}/>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        <Typography className={classes.description}><span className="description">I took part in quarterly projects where we worked 
                            in teams to build websites from scratch for local nonprofits. For the frontend, 
                            I worked with JavaScript/HTML/CSS and reactjs. For the backend, I worked with
                            node and express. I worked alongside fellow developers and designers to ensure
                            the quality of the websites.</span></Typography>
                        </TimelineContent>
                        </TimelineItem>

                    </Timeline>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;