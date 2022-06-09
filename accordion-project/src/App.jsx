import './App.css';

import Question from './Question';
import data from './data';

import { useState } from 'react';

const App = () => {
	const [questions, setQuestions] = useState(data);

	return (
		<main>
			<section className='container'>
				<h3>Question and answers about login</h3>
				<section className='info'>
					{questions.map((question) => (
						<Question key={question.id} {...question} />
					))}
				</section>
			</section>
		</main>
	);
};

export default App;
