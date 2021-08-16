import './Home.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Home = () => {

    return (
        <div className="home-page">
            <div className="home-container">

                {/* <div className="wrapper">
                    <div className="typing-container">
                        <p className="typing-text">Hi, I'm Ferica.</p> 
                    </div>
                </div> */}

                <div className="content">
                    <p className="typed">Hi, I'm Ferica.</p>
                    <p className="typed">// I code ideas.</p>

                    <div className="icons-container">
                        <a href="https://www.linkedin.com/in/ferica-ting-6141511b0/"><LinkedInIcon className="icon" id="linkedin" fontSize="large"/></a>
                        <a href="https://github.com/ferica"><GitHubIcon className="icon" id="github" fontSize="large" /></a>
                    </div>
                </div>
                 
            </div>   
        </div>
      );
}
 
export default Home;