import { makeStyles } from '@material-ui/core/styles';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';


const ExperienceItem = (props) => {
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
        <div className="experience-item-container">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography className={classes.role}><span className="role">{props.role}</span></Typography>
                    <Typography className={classes.time}><span className="date">{props.date}</span></Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot className={classes.dot}/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography className={classes.place}>
                        <a href={props.companyLink}>{props.place}</a>
                    </Typography>
                    <Typography className={classes.description}><span className="description">{props.description}</span></Typography>
                </TimelineContent>
            </TimelineItem>
        </div>   
     );
}
 
export default ExperienceItem;