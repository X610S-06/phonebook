import React, { useState } from 'react'

const Contacts = ({ numbers }) => {

	const [search, setSearch] = useState('')
	const [filters, setFilters] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	})

	const handleSearch = (e) => {
		e.preventDefault()
		const data = e.target.value
		setSearch(data)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		Object.entries(numbers).map((number) => {
			if (number.firstName.toLowerCase().includes(search.toLowerCase())) {
				setFilters([...filters, number])
			}
		})
	}

	return (
		<div class='flex flex-col items-center p-2 m-4'>
			<div class='flex flex-row border-2 rounded text-black'>
				<form onSubmit={handleSubmit} className='p2 m-2'>
					<input
						type='text'
						class='px-4 py-2 w-60'
						placeholder='Search...'
						name='search'
						autocomplete='off'
						onChange={handleSearch}
					></input>
					<button
						class='flex flex-row w-full h-10 items-center justify-center rounded'
						onSubmit={handleSubmit}
					> Submit 
						<svg class='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
						</svg>
					</button>
				</form>
			</div>

			<div className='flex flex-row p-8'>
				<table className='flex flex-col'>
					<thead>
						<tr className='flex flex-row'>
							<th className='m-2 p-2 border-2'>Contacts List</th>
						</tr>
					</thead>
					<tbody>
						{numbers.map((number) => (
							<tr key={number.phone} className='flex flex-row '>
								<td className='m-2 p-2'>{number.firstName}</td>
								<br></br>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Contacts
