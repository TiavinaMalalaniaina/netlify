import './../../styles/PlayerList.css';
import './../../assets/bootstrap/css/bootstrap.min.css';

const PlayerList = ({players}) => {
  
  return (
    <div className="container mt-5">
    <h2>Statistiques des joueurs NBA</h2>
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Équipe</th>
          <th>M</th>
          <th>MJ</th>
          <th>PPM</th>
          <th>RPM</th>
          <th>PDPM</th>
          <th>MPM</th>
          <th>EFF</th>
          <th>FG%</th>
          <th>3P%</th>
          <th>%LF</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{ index + 1 }</td>
            <td>{player.nom}</td>
            <td>{player.equipe}</td>
            <td>{player.stat.match}</td>
            <td>{player.stat.matchJoue}</td>
            <td>{player.stat.pointParMatch}</td>
            <td>{player.stat.rebondParMatch}</td>
            <td>{player.stat.passeDecisifParMatch}</td>
            <td>{player.stat.minuteParMatch}</td>
            <td>{player.stat.efficacite}</td>
            <td>{player.stat.fieldGoal}</td>
            <td>{player.stat.threePoint}</td>
            <td>{player.stat.lancerFront}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default PlayerList;
