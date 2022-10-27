import React from 'react'

import { useTeam } from '../../common/hooks'

import { Card } from '../../components/Card/Card'

import { StyledPageWrapper } from '../../themes/global'
import { StyledCardContainer } from './styled'

export const About: React.FC = () => {
	const { teamMembers } = useTeam()

	return (
		<StyledPageWrapper>
			<header>
				<h1>About us</h1>
				<p>
					Cyrkl is an international technology and consulting company
					specialising in circular waste management. Thanks to advanced
					technological solutions, Cyrkl helps companies turn waste into
					resources and thus into revenue with Europe&apos;s largest digital
					marketplace for waste and residuals. In the area of consulting, we
					rely on our team of waste management experts. With our Circular Waste
					Scans, we analyze your company&apos;s waste streams and identify
					potential for CO2 and cost savings. Cyrkl provides market analyses and
					helps transfer recycling technologies and legislation. With these
					activities, Cyrkl brings innovation and circular economy principles to
					the world of waste management.
				</p>
			</header>
			<StyledCardContainer>
				{teamMembers.map(teamMember => (
					<Card key={teamMember.id} teamMember={teamMember} />
				))}
			</StyledCardContainer>
			<footer>
				<p>... and many more fantastic coworkers</p>
			</footer>
		</StyledPageWrapper>
	)
}
