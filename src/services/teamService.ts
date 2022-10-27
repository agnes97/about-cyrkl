import { Team } from '../types/team'

const TEAM_API_URL = 'https://cyrkl.com/api/v2/team-members'

export const getTeam = async (): Promise<Team> =>
	await fetch(TEAM_API_URL).then(response => response.json())
