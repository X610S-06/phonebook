import React from 'react'

const ContactList = ({ numbers }) => {
	return (
		<table>
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
	)
}

export default ContactList
