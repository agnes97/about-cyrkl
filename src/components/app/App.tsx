import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { About } from '../../pages/About/About'

export const App: React.FC = () => (
	<Routes>
		<Route path="/" element={<About />} />
	</Routes>
)

export default App
