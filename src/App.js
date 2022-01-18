import React, { useState } from 'react'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'

function App() {
	const [numbers, setNumbers] = useState([
		{
			firstName: '',
			lastName: '',
			phone: '',
		},
	])

	const handleSubmit = (newNumber) => {
		setNumbers([...numbers, newNumber])
	}

	return (
		<>
			<h2 className='flex justify-center my-16 text-6xl font-mono text-[#f7454d]'>PHONE BOOK</h2>
			<div className='flex flex-col justify-center md:flex-row lg:flex-row '>
				<div className='flex flex-col w-1/4 h-full font-mono p-10 my-8 mx-20 md:mx-10 md:p-10 lg:mx-10 lg:p-10'>
					<h2 className='flex justify-center p-2 text-2xl font-mono text-[#f7454d]'>ADD CONTACT</h2>
					<AddContact onSubmit={handleSubmit} />
				</div>
				<div className='flex flex-col w-1/4 h-full font-mono p-20 my-8 mx-20 md:mx-10 md:p-10 lg:mx-10 lg:p-10'>
					<h2 className='flex justify-center p-2 text-2xl font-mono text-[#f7454d]'>
						SEARCH CONTACT
					</h2>
					<Contacts numbers={numbers} />
				</div>
			</div>
		</>
	)
}

export default App
