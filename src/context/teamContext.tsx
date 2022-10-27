import React, {
	createContext,
	ReactNode,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { getTeam } from '../services/teamService'
import { Team } from '../types/team'

interface TeamContextProps {
	children: ReactNode
}

export interface TeamContextType {
	teamMembers: Team
}

export const TeamContext = createContext<TeamContextType>({
	teamMembers: [],
})

export const TeamProvider: React.FC<TeamContextProps> = ({ children }) => {
	const [teamMember, setTeamMembers] = useState<Team>([])

	const sortByPriority = (teamMembers: Team) => {
		return teamMembers.sort((a, b) => Number(b.sorting_priority) - Number(a.sorting_priority))
	}

	useEffect(() => {
		try {
			getTeam().then(team => {
				const sortedTeam = sortByPriority(team)
				return setTeamMembers(sortedTeam)
			})
		} catch (error) {
			console.error(
				'Following error occured while fetching team members:',
				error,
			)
		}
	}, [setTeamMembers])

	const teamContextValue = useMemo(
		() => ({ teamMembers: teamMember }),
		[teamMember],
	)

	return (
		<TeamContext.Provider value={teamContextValue}>
			{children}
		</TeamContext.Provider>
	)
}
