import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'

export const App: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
	</Routes>
)

export default App
