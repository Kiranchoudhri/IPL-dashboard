// Write your code here
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedTeams = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    console.log(updatedTeams)
    this.setState({teamsList: updatedTeams, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="homeContainer">
        <div className="headingContainer">
          <img
            className="iplLogo"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="pageTitle">IPL Dashboard</h1>
        </div>
        <ul className="teamsListContainer">
          {teamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamData={eachTeam} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
