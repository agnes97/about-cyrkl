import { useContext } from 'react'

import { TeamContext, TeamContextType } from '../context/teamContext'

export const useTeam = (): TeamContextType => useContext(TeamContext)
