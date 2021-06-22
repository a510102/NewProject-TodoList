import { useState, useEffect } from 'react';

const Search = ({ value, onChange, children }) => (
	<div>
		<label htmlFor="search">{children}</label>
		<input
			id="search"
			type="text"
			value={value}
			onChange={onChange}
		/>
	</div>
);

const getUser = () => Promise.resolve({id: '1', name: 'Robin'});

const SearchBar = () => {
	const [search, setSearch] = useState();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const loadUser = async () => {
			const userResponse = await getUser();
			setUser(userResponse);
		}
		loadUser();
	}, [])

	const handleChange = (event) => {
		setSearch(event.target.value);
	}

	return (
		<div>
			{user && <p>{user.name}</p>}
			<Search value={search} onChange={handleChange}>
				Search:
			</Search>
			<p>Search for {search || '...'}</p>
		</div>
	)
}

export default SearchBar;
