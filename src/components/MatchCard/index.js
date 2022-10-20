// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchData
  return (
    <li className="matchCardContainer">
      <img src={competingTeamLogo} className="logo" alt="team" />
      <h1 className="teamName">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className="winOrLose">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
