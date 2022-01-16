import React, { useState } from 'react'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

function App() {
	const [numbers, setNumbers] = useState([
		{
			firstName: 'Somanath',
			lastName: 'Biradar',
			phone: '1234567890',
		},
	])

	const handleSubmit = (newNumber) => {
		setNumbers([...numbers, newNumber])
	}

	return (
		<>
			<h2 class='flex justify-center my-16 text-6xl font-mono text-[#f7454d]'>PHONE BOOK</h2>
			<div class='flex justify-center sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
				<div class='flex flex-col w-1/4 h-full font-mono p-12 my-8 mx-10 border-2 rounded'>
					<h2 class='flex justify-center p-2 text-2xl font-mono text-[#f7454d]'>ADD CONTACT</h2>
					<AddContact onSubmit={handleSubmit} />
				</div>
				<div class='flex flex-col w-1/2 h-full font-mono p-12 my-8 mx-10 border-2 rounded'>
					<h2 class='flex justify-center p-2 text-2xl font-mono text-[#f7454d]'>SEARCH CONTACT</h2>
					<Contacts numbers={numbers} />
				</div>
			</div>
		</>
	)
}

export default App
