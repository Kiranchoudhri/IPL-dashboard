// Write your code here

import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData
  return (
    <Link to={`/team-matches/${id}`} className="teamLink">
      <li className="teamCardContainer">
        <img src={teamImageUrl} className="teamLogos" alt={name} />
        <h1 className="teamNames">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
