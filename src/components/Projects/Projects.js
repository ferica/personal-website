import './Projects.css';
import Website_Image from './Website_Image.PNG';
import placeholder from './placeholder.PNG';
import GitHubIcon from '@material-ui/icons/GitHub';


const Projects = () => {
    return ( 
        <div className="projects-page">
            <div className="projects-container">
                <p id="title">Projects</p>
                <p id="grey-text">Check out some of my work!</p>



                
                <div className="cards-container">
                    <div class="card">
                        <img src={Website_Image} alt='Website-image'/>
                        
                        <div class="card-text">
                            <h4>Personal Website</h4>
                            <button>More details</button>
                        </div>
                    </div>

                    <div class="card">
                        <img src={placeholder} alt='painting1'/>
                        <div class="card-text">
                            <h4>placeholder</h4>
                            <button>More details</button> 
                        </div>
                    </div>

                    <div class="card">
                        <img src={placeholder} alt='painting1'/>
                        <div class="card-text">
                            <h4>placeholder</h4> 
                            <button>More details</button> 
                        </div>
                    </div>

                    <div class="card">
                        <img src={placeholder} alt='painting1'/>
                        <div class="card-text">
                            <h4>placeholder</h4> 
                            <button>More details</button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
     );
}
 
export default Projects;