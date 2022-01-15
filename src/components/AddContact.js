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
		<div>
			<form onSubmit={handleSubmit} className='py-2 mx-4'>
				<label>First Name : </label>
				<input
					className='my-4 py-2 rounded-lg'
					type='text'
					name='firstName'
					onChange={handleChange}
					value={number.firstName}
				></input>
				<label>Last Name : </label>
				<input
					className='my-4 py-2 rounded-lg'
					type='text'
					name='lastName'
					onChange={handleChange}
					value={number.lastName}
				></input>
				<label>Phone :</label>
				<input
					className='my-4 py-2 rounded-lg'
					type='text'
					name='phone'
					onChange={handleChange}
					value={number.phone}
				></input>
				<button className='mx-12 mt-8'>Submit</button>
			</form>
		</div>
	)
}

export default AddContact