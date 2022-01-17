import React, { useState } from 'react'

const Contacts = ({ numbers }) => {
	
	const [search, setSearch] = useState('')
	const [filters, setFilters] = useState([])
	

	const handleSearch = (e) => {
		e.preventDefault()
		const data = e.target.value
		setSearch(data)
	}

	const handleFilter = (e) => {
		e.preventDefault()
		setFilters([])
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		numbers.map((number) => {
			if (!search) {
				setFilters([])
			} else if
				(number.firstName.toLowerCase().includes(search.toLowerCase()) ||
				number.lastName.toLowerCase().includes(search.toLowerCase()) ||
				number.phone.includes(search)
			) {
				setFilters([])
			}
		})
	}
	console.log(filters)
	return (
		<div className='flex flex-col items-center p-2 m-4'>
			<div className='flex flex-col rounded text-black'>
				<form onSubmit={handleSubmit} className='flex flex-row w-80'>
					<input
						type='text'
						className='px-4 w-full'
						placeholder='Search...'
						name='search'
						autoComplete='off'
						onChange={handleSearch}
						onBlur={handleFilter}
					></input>
					<button className='flex flex-row w-15 h-10 items-center justify-center rounded'>
						<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
							<path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
						</svg>
					</button>
				</form>
				<div className='flex flex-row p-4'>
					<table className='flex flex-col text-white'>
						<tbody>
							{filters.map((filter) => (
								<tr key={filter.phone} className='flex flex-row '>
									<td className='p-1'>{filter.firstName}</td>
									<td className='p-1'>{filter.lastName}</td>
									<td className='p-1'>{filter.phone}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>

			<div className='flex flex-row p-8'>
				<table className='flex flex-col'>
					<thead>
						<tr className='flex flex-row justify-center'>
							<th className='justify-center p-2 border-2'>Contacts List</th>
						</tr>
					</thead>
					<tbody>
						{numbers.map((number) => (
							<tr key={number.phone} className='flex flex-row '>
								<td className='p-2'>{number.firstName}</td>
								<td className='p-2'>{number.lastName}</td>
								<td className='p-2'>{number.phone}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Contacts
