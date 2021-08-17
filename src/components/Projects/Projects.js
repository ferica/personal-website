import './Projects.css';
import ProjectItem from './ProjectItem';
import Website_Image from './Website_Image.PNG';
import Ecommerce_Image from './Ecommerce_Image.PNG';
import placeholder from './placeholder.PNG';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallMadeIcon from '@material-ui/icons/CallMade';


const Projects = () => {

    return ( 
        <div className="projects-page">
            <div className="projects-container">
                <p id="title">Projects</p>
                <p id="grey-text">Check out some of my work!</p>
                
                <div className="project-item-container">
                    <ProjectItem image={Website_Image} 
                    projectName="Personal Website" 
                    description="Designed and implemented my own personal website to showcase my resume."
                    tools="Javascript, HTML/CSS, React.js, Figma"
                    github={true} view={true} 
                    githubLink="https://github.com/ferica/personal-website"
                    viewLink="/" />

                    <ProjectItem image={Ecommerce_Image} 
                    projectName="Ecommerce" 
                    description="Implemented an ecommerce website that mimics some of the functionalities
                    of sites like eBay. User information is logged and stored in a SQLite database."
                    tools="Python (Django), HTML/CSS" 
                    github={true}
                    githubLink="https://github.com/ferica/ecommerce" />



                    {/* <ProjectItem image={placeholder} projectName="Placeholder" description="testing" /> */}
           
                </div>
            </div>
        </div>
     );
}
 
export default Projects;