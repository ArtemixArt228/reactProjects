import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/all';

import { useState } from 'react';

const Question = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<article className='question'>
			<header>
				<h4>{title}</h4>
				<button onClick={() => setShowInfo(!showInfo)} className='btn'>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			<p>{showInfo ? info : ''}</p>
		</article>
	);
};
export default Question;
