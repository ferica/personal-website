import './Projects.css';
import Card from './Card';
import Website_Image from './Website_Image.PNG';
import placeholder from './placeholder.PNG';

import GitHubIcon from '@material-ui/icons/GitHub';
import CallMadeIcon from '@material-ui/icons/CallMade';


const Projects = () => {
    return ( 
        <div className="projects-page">
            <div className="projects-container">
                <p id="title">Projects</p>
                <p id="grey-text">Check out some of my work!</p>
                
                <div className="cards-container">
                    <Card image={Website_Image} 
                    projectName="Personal Website" 
                    description="Designed and implemented my own personal website to showcase my resume."
                    tools="Javascript, HTML/CSS, React.js"
                    github={true} view={true} 
                    githubLink="https://github.com/ferica/personal-website"
                    viewLink="/" />

                    <Card image={placeholder} projectName="Placeholder" description="testing" />
                    <Card image={placeholder} projectName="Placeholder" description="testing" />

            
                </div>
            </div>
        </div>
     );
}
 
export default Projects;