import React, { useState } from 'react'
import Search from './Search'

const Contacts = ({ numbers }) => {

	const [searchTerm, setSearchTerm] = useState('')