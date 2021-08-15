import './Experience.css';
import Timeline from '@material-ui/lab/Timeline';
import ExperienceItem from './ExperienceItem';


const Experience = () => {

    return(
        <div className="experience-page">
            <div className="experience-container">
                <p id="title">Experience</p>
                <div className="timeline-container">
                <Timeline>
                    <ExperienceItem role="Backend Developer" date="March 2021 - June 2021" place="#include @ Davis" 
                    companyLink="https://www.linkedin.com/company/include-davis"
                    description="Worked in a team of backend developers and used Node.js and Express to implement
                    the backend of the Join Us page. Made it so that form content gets emailed after a form
                    submission. Took part in implementing Google reCAPTCHA in
                    order to avoid spam submissions. Used Postman for API testing." />

                    <ExperienceItem role="Frontend Developer" date="October 2020 - March 2021" 
                    description="Used JavaScript/HTML/CSS and React.js to build the frontend of web pages.
                    Communicated effectively with designers to ensure the quality of the interface." />
                    
                </Timeline>
                </div>
            </div>
        </div>
    );

}
 
export default Experience;