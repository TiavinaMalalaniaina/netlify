import { useEffect, useState } from "react";
import PlayerList from "./views/pages/PlayerList";
import './styles/App.css';

function App() {

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        // const response = await axios.get('https://api.example.com/players');
        const response = {
          data: 
          [
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
            {
              nom: "Tiavina",
              equipe: "EAGLE",
              stat: {
                match: 5,
                matchJoue: 10,
                pointParMatch: 10,
                rebondParMatch: 20,
                passeDecisifParMatch: 20,
                minuteParMatch: 10,
                efficacite: 20,
                fieldGoal: 10,
                threePoint: 2,
                lancerFront: 10
              }
            },
          ],
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
