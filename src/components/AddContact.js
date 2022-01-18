import React, { useState } from 'react'

const AddContact = ({ onSubmit }) => {

	const [number, setNumber] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	})

	//form input change handling
	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setNumber({
			...number,
			[name]: value,
		})
		
	}
	//form submit handling
	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(number)
		setNumber({
			firstName: '',
			lastName: '',
			phone: '',
		})
	}

	//add contact input form
	return (
		<div className='flex flex-col items-center'>
			<form onSubmit={handleSubmit} className='p-2 m-2'>
				<label>First Name : </label>
				<input
					className='my-4 py-2 px-4 rounded-lg text-black'
					type='text'
					name='firstName'
					placeholder='first name...'
					onChange={handleChange}
					value={number.firstName}
				/>
				<label>Last Name : </label>
				<input
					className='my-4 py-2 px-4 rounded-lg text-black'
					type='text'
					name='lastName'
					placeholder='last name...'
					onChange={handleChange}
					value={number.lastName}
				></input>
				<label>Phone Number : </label>
				<input
					className='my-4 py-2 px-4 rounded-lg text-black'
					type='tel'
					name='phone'
					maxLength={10}
					pattern='[0-9]{10}'
					placeholder='1234567890'
					onChange={handleChange}
					value={number.phone}
				></input>
				<div className='flex flex-row justify-center p-2 m-2'>
					<button>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default AddContact