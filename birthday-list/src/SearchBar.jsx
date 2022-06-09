import { useState } from 'react';

const SearchBar = ({ people, setPeople }) => {
	const [copyPeople] = useState(people);
	const [inputValue, setInputValue] = useState('');

	const viewSearch = (event) => {
		setInputValue(event.target.value);
		if (event.target.value === '') setPeople(copyPeople);

		return inputValue;
	};

	const filterPeople = (person) => {
		const personName = person.name.toLowerCase();
		const inputName = inputValue.toLowerCase();

		return personName.includes(inputName);
	};

	const handleFilter = (event) => {
		event.preventDefault();
		setPeople([...copyPeople].filter((person) => filterPeople(person)));
	};
	return (
		<div className='search'>
			<input
				value={inputValue}
				onChange={viewSearch}
				className='searchBar'
				type='text'
				placeholder='Enter your friend name...'
			/>
			<button onClick={handleFilter} className='searchBtn'>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
