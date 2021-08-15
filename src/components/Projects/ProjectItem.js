import './ProjectItem.css';
import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import CallMadeIcon from '@material-ui/icons/CallMade';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const ProjectItem = (props) => {
    
    const[modalIsOpen, setModalIsOpen] = useState(false);
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    //checking if user clicks outside the modal
    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (modalIsOpen && ref.current && !ref.current.contains(e.target)) {
            setModalIsOpen(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [modalIsOpen])

    // to add styling to material ui icons
      const useStyles = makeStyles((theme) => ({
        tagIcon: {
          width: '15px',
          height: '15px',
        },
      }));
    const classes = useStyles();

    // want to show github icon or not
    function Github(props) {
        const icon = props.icon;
        if (icon) {
            return <GitHubIcon fontSize="small" />
        }
        return null;
    }

    // want to show callmade icon or not
    function View(props) {
        const icon = props.icon;
        if (icon) {
            return <CallMadeIcon fontSize="small" />
        }
        return null;
    }
      
    return ( 
        <div className="project-item">
            <div className="indiv-card">
              <div className="card">
                  <img src={props.image} alt='image'/>
                  <div className="card-text">
                      <h4>{props.projectName}</h4>
                      <button onClick={openModal}>View details</button>
                  </div>
              </div>
            </div>

            { modalIsOpen ? 
            <div className="modal">
                <div className="modal-content" ref={ref}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <h4>{props.projectName}</h4>
                    <p>{props.description}</p> 

                    <p className="tools"><span id="tag-icon"><LocalOfferIcon className={classes.tagIcon}/></span><span>{props.tools}</span></p>
                    <div className="icons">
                        <a href={props.githubLink}><Github icon={props.github} /></a>
                        <a href={props.viewLink}><View icon={props.view} /></a> 
                    </div>
                </div>
            </div> : null}
        </div>

     );
}
 
export default ProjectItem;