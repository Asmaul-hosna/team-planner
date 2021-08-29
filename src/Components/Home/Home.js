import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import fakeData from '../../FakeData/fakeData.json';
import Cart from '../Cart/Cart';


const Home = () => {
    const[players,setPlayers]=useState([]);
    const[cart,setCart]=useState([]);
    
    useEffect(()=>{
        setPlayers(fakeData)

    },[])

    const handleAddPlayer = (player) =>{
    const newCart = [...cart,player];
        setCart(newCart);
    }
    return (
     
             <div className="home-container d-flex">
           <div className="player-container col-md-9 justify-content-around">
           {players.map((player) => (
            <Player player = {player}
            handleAddPlayer = {handleAddPlayer}></Player>
          ))}
        
           </div>
           <div className="cart-container col-md-3">
            <Cart cart={cart}></Cart>
           </div>
           
        </div>
        
    );
};

export default Home;