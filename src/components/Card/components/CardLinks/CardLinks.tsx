import React from 'react'

import { EmailIcon } from '../../../../assets/EmailIcon'
import { LinkedInIcon } from '../../../../assets/LinkedInIcon'
import { PhoneIcon } from '../../../../assets/PhoneIcon'

import { TeamMember } from '../../../../types/team'
import { StyledSocialMediaWrapper } from '../../styled'

interface CardLinksProps {
	email: TeamMember['email']
	phoneNumber: TeamMember['phone_number']
	LinkedInUrl: TeamMember['linkedin_url']
}

export const CardLinks: React.FC<CardLinksProps> = ({
	email,
	phoneNumber,
	LinkedInUrl,
}) => (
	<StyledSocialMediaWrapper>
		{email && (
			<span>
				<EmailIcon />
				<a href={`mailto:${email}`}>{email}</a>
			</span>
		)}
		{phoneNumber && (
			<span>
				<PhoneIcon />
				<a href={`phoneto:${phoneNumber}`}>{phoneNumber}</a>
			</span>
		)}
		{LinkedInUrl && (
			<span>
				<LinkedInIcon />
				<a href={LinkedInUrl} target="blank">
					LinkedIn
				</a>
			</span>
		)}
	</StyledSocialMediaWrapper>
)
