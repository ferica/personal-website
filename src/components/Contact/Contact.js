import './Contact.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Contact = () => {
    return ( 
        <div className="contact-page">
            <div className="contact-container">
                <p id="title">Contact</p>
                <p id="grey-text">Let's stay in touch.</p>

                <div className="info">
                    <p><a className="icon" href="https://www.linkedin.com/in/ferica-ting-6141511b0/"><LinkedInIcon fontSize="large"/></a></p>
                    <p><a className="icon" href="https://github.com/ferica"><GitHubIcon fontSize="large"/></a></p>
                    <p><a>Email: fericating2001@gmail.com</a></p>
                </div>

                <p id="copyright">Made with &hearts; by Ferica Ting &copy; 2021.</p>
            </div>
        </div>
     );
}
 
export default Contact;