import React, { useState } from 'react'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

function App() {
	const [numbers, setNumbers] = useState([
		{
			firstName: 'Som',
			lastName: 'X',
			phone: '1234567890',
		},
	])

	const handleSubmit = (newNumber) => {
		setNumbers([...numbers, newNumber])
	}

	return (
		<div className="container mx-auto px-10">
			<h2>Phone Book</h2>
			<br></br>
			<AddContact onSubmit={handleSubmit} />
			<Contacts phoneNumbers={numbers} />
		</div>
	)
}

export default App
