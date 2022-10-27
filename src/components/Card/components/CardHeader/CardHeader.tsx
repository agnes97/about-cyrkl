import React from 'react'
import { HQIcon } from '../../../../assets/HQIcon'

import { TeamMember } from '../../../../types/team'
import { StyledEmployeeHeader } from '../../styled'

interface CardHeaderProps {
	teamMemberName: TeamMember['name']
	isoCodes: TeamMember['country_iso_codes']
}

const getFlags = (isoCodes: TeamMember['country_iso_codes']) => {
	if (!isoCodes.length) return

	return isoCodes.map((flag, index) => {
		if (flag === 'HQ') return <HQIcon key={index} />

		return (
			<img
				key={index}
				src={`https://hatscripts.github.io/circle-flags/flags/${flag.toLocaleLowerCase()}.svg`}
				alt={flag}
				height="20"
			/>
		)
	})
}

export const CardHeader: React.FC<CardHeaderProps> = ({
	teamMemberName,
	isoCodes,
}) => (
	<StyledEmployeeHeader>
		<h2>{teamMemberName}</h2>
		{isoCodes && getFlags(isoCodes)}
	</StyledEmployeeHeader>
)
