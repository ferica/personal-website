import './About.css';
import Ferica from './Ferica.jpg';

import { Link } from 'react-router-dom';

const About = () => {
    return ( 
        <div className="about-page">
            <div className="about-container">
                <p id='title'> About </p>

                <div className='aligned'>
                    <img src={Ferica} alt='Ferica-img'/>
           
                    <div>
                        <p id='name'>Ferica Ting</p>
                        <p id='caption'> Computer Science Student at UC Davis </p>
                    </div>
                </div>
              
                <p id='intro'>
                    Hi! I'm currently an undergraduate double majoring in Computer Science and Cognitive Science at <a href="https://www.ucdavis.edu/">UC Davis</a>.<br/><br/>

                    I'm interested in how humans interact with technology and using that knowledge to implement a user-friendly reality. 
                    My aspirations lie in, but are not limited to, software, web development, UI/UX and HCI.<br/><br/>

                    Something I enjoy doing during my free time is <Link exact to='/painting'>painting</Link>!<br/>
                    ___________________<br/><br/>

                    Tools/technologies I’ve worked with:
                    <ul>
                        <li>Javascript (React, Node)</li>
                        <li>HTML/CSS</li>
                        <li>Python (Django)</li>
                        <li>C/C++</li>
                        <li>Git</li>
                        <li>Linux</li>
                        <li>Figma</li>
                    </ul>
                </p>
            </div>
        </div>
     );
}
 
export default About;