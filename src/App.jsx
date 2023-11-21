import { useEffect, useState } from "react";
import PlayerList from "./views/pages/PlayerList";
import './styles/App.css';

function App() {

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      var json = require('./data.json')
      try {
        // const response = await axios.get('https://api.example.com/players');
        const response = {
          data: json,
          exception: ""
        }
        setPlayers(response.data);
      } catch (error) {
        // console.error('Erreur lors du chargement des joueurs :', error);
      }
    };

    fetchPlayers();
  }, []); 



  return (
    <PlayerList players={players}/>
  );
}

export default App;
