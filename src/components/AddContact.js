import React, { useState } from 'react'

const AddContact = ({ onSubmit }) => {

	const [number, setNumber] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	})

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setNumber({
			...number,
			[name]: value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(number)
		setNumber({
			firstName: '',
			lastName: '',
			phone: '',
		})
	}

	return (
		<div className='flex flex-col items-center'>
			<form onSubmit={handleSubmit} className='p2 m-2'>
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
					type='text'
					name='phone'
					placeholder='number...'
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