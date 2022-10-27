import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { TeamProvider } from './context/teamContext'

import App from './components/app/App'

import { GlobalStyles } from './themes/global'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element!')

const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<TeamProvider>
				<GlobalStyles />
				<App />
			</TeamProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
