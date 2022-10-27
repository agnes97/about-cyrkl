import React from 'react'

import { TeamMember } from '../../types/team'
import { CardHeader } from './components/CardHeader/CardHeader'
import { CardLinks } from './components/CardLinks/CardLinks'
import { StyledCard } from './styled'

interface CardProps {
	teamMember: TeamMember
}

const transformJobSys = (input: string): string => {
	const word = input
		.split('-')
		.map(word => {
			if (word === 'and') return '&'
			if (word === 'of' || word === 'with') return word
			if (word.length <= 3) return word.toUpperCase()
			return word.charAt(0).toUpperCase() + word.slice(1)
		})
		.filter(word => word.length > 1)

	if (word.every(word => word.length === 3)) {
		return word.join('/')
	}

	return word.join(' ')
}

export const Card: React.FC<CardProps> = ({ teamMember }) => {
	const {
		name,
		job_title_sys,
		job_description_sys,
		profile_image_url,
		email,
		phone_number,
		linkedin_url,
		country_iso_codes,
	} = teamMember

	return (
		<StyledCard>
			<div>
				<img
					src={profile_image_url}
					alt={`photo of ${name}`}
					width="120"
					height="120"
				/>
			</div>
			<div>
				<CardHeader teamMemberName={name} isoCodes={country_iso_codes} />
				<p>
					<strong>{transformJobSys(job_title_sys)}</strong>
				</p>
				<p>{transformJobSys(job_description_sys)}</p>
				<CardLinks
					email={email}
					phoneNumber={phone_number}
					LinkedInUrl={linkedin_url}
				/>
			</div>
		</StyledCard>
	)
}
