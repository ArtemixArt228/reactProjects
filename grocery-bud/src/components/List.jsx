import { FaEdit, FaTrash } from 'react-icons/fa';

const List = ({
	items,
	setList,
	setAlert,
	setIsEditing,
	setEditID,
	setName,
}) => {
	const deleteItem = (itemId) => {
		const newList = items.filter((item) => item.id !== itemId);
		setList(newList);
		setAlert({
			show: true,
			msg: 'You removed item from the list',
			type: 'danger',
		});
	};

	const editItem = (itemId) => {
		const editedElement = items.find((eItem) => eItem.id === itemId);
		setIsEditing(true);
		setEditID(itemId);
		setName(editedElement.title);
	};

	return (
		<div className='grocery-list'>
			{items.map((item) => {
				const { id, title } = item;
				return (
					<article key={id} className='grocery-item'>
						<p className='title'>{title}</p>
						<div className='btn-container'>
							<button type='button' className='edit-btn'>
								<FaEdit onClick={() => editItem(id)} />
							</button>
							<button type='button' className='delete-btn'>
								<FaTrash onClick={() => deleteItem(id)} />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};
export default List;
