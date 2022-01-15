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
		<div class='grid justify-center'>
			<h2 class='flex justify-center my-10 text-6xl font-mono text-[#f7454d]'>Phone Book</h2>
			<div class='flex font-mono h-120 w-80 p-12 my-4 mx-10 border-4 rounded-lg'>
				<AddContact onSubmit={handleSubmit} />
			</div>
			<div class='flex justify-center font-mono h-120 w-80 p-12 mx-10 '>
				<Contacts numbers={numbers} />
			</div>
		</div>
	)
}

export default App
