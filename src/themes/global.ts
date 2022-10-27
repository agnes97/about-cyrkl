import styled, { createGlobalStyle } from 'styled-components'
import 'sanitize.css'
import 'sanitize.css/typography.css'

import { colorPalette } from './variables'

export const GlobalStyles = createGlobalStyle`
    * {
        scrollbar-width: none;

        &::-webkit-scrollbar {
            width: 0;
        }
    }

    html {
        // I am not using Proxima Nova due to it's license!
        // see: https://w3bits.com/proxima-nova-alternative-fonts/
        font-family: 'Montserrat', sans-serif;
        font-size: 62.5%;
    }

    body {
        /* COLOR SCHEME */
        --background-primary-color: ${colorPalette.backgroundPrimaryColor};
        --text-primary-color: ${colorPalette.textPrimaryColor};
        --accent-color: ${colorPalette.accentColor};

        /* FONT-SIZE DESKTOP */
        --default: 1.6rem;
        --h1: 5rem;
        --h2: 2.5rem;

        background-color: var(--background-primary-color);
        font-size: var(--default);

        & > main#root {
            min-height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            padding: 1rem 5rem;
        }

        & * h1, & * h2 {
            align-self: flex-start;
            padding: 0;
            margin: 0;
            font-weight: 800;
        }

        & * h1 { font-size: var(--h1); }
        & * h2 { font-size: var(--h2); }

        & * a {
            color: var(--text-primary-color);
            text-decoration: none;
            cursor: pointer;
        }

        & * p {
            max-width: 80%;
        }
    }
`

export const StyledPageWrapper = styled.div`
	max-width: 1260px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	margin: 0 auto;
	background-image: url('https://cyrkl.com/img/bg-pattern-crosses-top.svg'),
		url('https://cyrkl.com/img/bg-pattern-crosses-bottom.svg');
	background-position: center top, center bottom;
	background-repeat: no-repeat, no-repeat;

	& > header {
		padding: 3rem 0;
	}

	& > footer {
		padding: 3rem 0;

		& > p {
			width: 100%;
			text-align: center;
			margin: 0 auto;
		}
	}
`
