import styled from 'styled-components'

export const StyledCard = styled.div`
	width: 540px;
	display: flex;
	gap: 1rem;
	align-items: flex-start;

	> div:first-child {
		background: url('https://cyrkl.com/img/bg-dots-grey.svg') right 5px
			no-repeat;
		min-width: 150px;
		width: 150px;
		height: 165px;
		position: relative;
		margin-right: 0.4rem;

		& > img {
			position: relative;
			z-index: 2;
		}
	}

	& p {
		margin: 0;

		& * strong {
			text-transform: uppercase;
		}
	}
`

export const StyledEmployeeHeader = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	padding-bottom: 1rem;
`

export const StyledSocialMediaWrapper = styled.article`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-top: 1rem;

	& > span > svg {
		margin-right: 0.5rem;
	}
`
