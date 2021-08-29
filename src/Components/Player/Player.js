import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import'./Player.css';

const Player = (props) => {
    const{image,name,salary}=props.player
    return (
        <div className="player-info col-md-4">
         <img style={{width:'100px'}}src={image} alt=""/>
         <h5>{name}</h5>
         <h6>salary(Euro):{salary}</h6>
         <button className = 'btn-btn-secondary' onClick={()=>props.handleAddPlayer(props.player)}><FontAwesomeIcon
         icon=
         {faPlus} />Add Me</button>
         </div>
  
   
    
 
    );
};

export default Player;