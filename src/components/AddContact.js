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
		<>
			<form onSubmit={handleSubmit}>
				<label>First Name</label>
				<input
					type='text'
					name='firstName'
					onChange={handleChange}
					value={number.firstName}
				></input>
				<label>Last Name</label>
				<input
					type='text'
					name='lastName'
					onChange={handleChange}
					value={number.lastName}
				></input>
				<label>Phone</label>
				<input type='text' name='phone' onChange={handleChange} value={number.phone}></input>
				<button className='self-end'>Submit</button>
			</form>
		</>
	)
}

export default AddContact