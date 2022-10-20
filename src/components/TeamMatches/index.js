// Write your code here
import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    resentMatchDetails: '',
    previousMatches: [],
    mainImageUrl: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      resentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, resentMatches} = updatedData
    const prevMatches = resentMatches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))
    const matchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    this.setState({
      resentMatchDetails: matchDetails,
      previousMatches: prevMatches,
      mainImageUrl: teamBannerUrl,
    })
  }

  render() {
    const {resentMatchDetails, previousMatches, mainImageUrl} = this.state
    console.log(resentMatchDetails, previousMatches)
    return (
      <div className="teamMatchContainer">
        <img src={mainImageUrl} className="bannerImage" alt="team banner" />
        <p className="latestMatches">Latest Matches</p>
        <LatestMatch resentMatchDetails={resentMatchDetails} />
        <ul className="cardContainer">
          {previousMatches.map(eachDetail => (
            <MatchCard key={eachDetail.id} matchData={eachDetail} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
