import './Painting.css';
import Ferica from '../About/Ferica.jpg';
import painting1 from './painting1.jpeg';
import painting2 from './painting2.jpeg';
import painting3 from './painting3.jpeg';
import painting4 from './painting4.jpeg';
import painting5 from './painting5.jpeg';
import painting6 from './painting6.jpeg';
import painting7 from './painting7.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Painting = () => {
    return ( 
        <div className="painting-page">
            <div className="painting-container">

              <div className="text-container">
                <p id="title">Ferica's Art Gallery<span id="logo"><a href="/"><FavoriteIcon /></a></span></p>
                <p id="caption">Some of my paintings :)</p>
              </div>

              <div className="art-container">
                <img src={painting1} alt='painting1'/>
                <img src={painting2} alt='painting2'/>
                <img src={painting3} alt='painting3'/>
                <img src={painting4} alt='painting4'/>
                <img src={painting5} alt='painting5'/>
                <img src={painting6} alt='painting6'/>
                <img src={painting7} alt='painting7'/>
              </div>

  {/* <div class='row'>    
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"Loneliness of autumn"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"Happiness"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"Last Dream"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"New Big Ben"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
  </div>
  <div class='row'>    
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"Autumn Foggy Day"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"Paris, Eifel Tower"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"He proposal"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
    <div class='thumbnail'>
      <div class='photoContainer'>
        <a href='#'>
        <img src={Ferica} alt='Ferica-img'/>
          <div class='photoInfo'>
            <h3>"The Bridge of Amsterdam"</h3>
            <span class='paintingDate'>Leonid Afremov</span>
          </div>          
        </a>
      </div>
    </div>
  
  
</div>        */}

            </div>
        </div>
     );
}
 
export default Painting;