
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/PlayersData/Cart/Cart';
import PlayersData from './Components/PlayersData/PlayersData';

function App() {
  const[list,setList] = useState([])
  const[team,setTeam] = useState([])
  useEffect(() => {
    fetch("https://api.mocki.io/v1/5da3f472")
    .then(res => res.json())
    .then(data => setList(data))
  }, [])
  const handleAddPlayer = (player) => {
    const newTeam = [...team,player]
    setTeam(newTeam)
    
  }
  console.log(team)
  return (
   
    <div >
    <h4>Players Picked: {team.length}</h4>
    <Cart team={team}></Cart>
    <ul>
      {
        list.map(player => <PlayersData
        handleAddPlayer = {handleAddPlayer} 
        player = {player}>
        </PlayersData>)
      }
    </ul>
        
    </div>
  );
}

export default App;
