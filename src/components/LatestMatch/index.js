// Write your code here
import './index.css'

const LatestMatch = props => {
  const {resentMatchDetails} = props
  const {
    competingTeam,
    date,
    result,
    venue,
    firstInnings,
    secondInnings,
    umpires,
    manOfTheMatch,
    competingTeamLogo,
  } = resentMatchDetails
  return (
    <div className="latestMatchContainer">
      <div className="teamNameAndVenue">
        <h1 className="teamName">{competingTeam}</h1>
        <p className="matchDate">{date}</p>
        <p className="venueResult">{venue}</p>
        <p className="venueResult">{result}</p>
      </div>
      <img className="teamLogo" src={competingTeamLogo} alt="latest" />
      <div className="otherMatchDetails">
        <p className="typeOne">First Innings</p>
        <p className="typeTwo">{firstInnings}</p>
        <p className="typeOne">Second Innings</p>
        <p className="typeTwo">{secondInnings}</p>
        <p className="manOfMatch">Man Of The Match</p>
        <p className="typeTwo">{manOfTheMatch}</p>
        <p className="typeOne">Umpires</p>
        <p className="typeTwo">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
