import './App.css';

import { useState, useEffect } from 'react';

import List from './components/List';
import Alert from './components/Alert';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');
	if (list) return JSON.parse(localStorage.getItem('list'));
	return [];
};

const App = () => {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: '',
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert({ show: false, msg: '', type: '' });
		}, 3000);
		return () => clearInterval(timeout);
	}, [alert]);
	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			setAlert({ show: true, msg: 'Write a grocery first', type: 'danger' });
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editID) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			setName('');
			setEditID(null);
			setIsEditing(false);
			setAlert({ show: true, msg: 'Value changed', type: 'success' });
		} else {
			setAlert({ show: true, msg: 'Item added to the list', type: 'success' });
			const newItem = { id: new Date().getTime().toString(), title: name };
			setList([...list, newItem]);
			setName('');
		}
	};

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} />}
				<h3>Grocery bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e. g. eggs'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? 'Edit' : 'Submit'}
					</button>
				</div>
			</form>
			<div className='grocery-container'>
				<List
					items={list}
					{...{ setList, setAlert, setEditID, setIsEditing, setName }}
				/>
				<button
					className='clear-btn'
					onClick={() => {
						setList([]);
						setAlert({
							show: true,
							msg: 'You removed all items from the list',
							type: 'danger',
						});
					}}
				>
					Clear items
				</button>
			</div>
		</section>
	);
};

export default App;
