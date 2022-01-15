import React from 'react'

const Contacts = ({ numbers }) => {
	return (
		<div class='relative'>
			<form className='py-2 mx-4'>
				<input className='my-4 mx-8 py-2 rounded-lg' type='text' name='search' value=''></input>
			</form>
			<table class='table-fixed'>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
					{numbers.map((number) => (
						<tr key={number.phone}>
							<td>{number.firstName}</td>
							<td>{number.lastName}</td>
							<td>{number.phone}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Contacts
