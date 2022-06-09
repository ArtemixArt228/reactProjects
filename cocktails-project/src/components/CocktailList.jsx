import Cocktail from './Cocktail';
import Loading from './Loading';

import { useGlobalContext } from '../context';

const CocktailList = () => {
	const { cocktails, loading } = useGlobalContext();

	return loading ? (
		<Loading />
	) : cocktails.length < 1 ? (
		<h2 className='section-title'>
			no cocktails matched your search criteria{' '}
		</h2>
	) : (
		<section className='section'>
			<h2 className='section-title'>cocktails</h2>
			<div className='cocktails-center'>
				{cocktails.map((cocktail) => (
					<Cocktail key={cocktail.id} {...cocktail} />
				))}
			</div>
		</section>
	);
};

export default CocktailList;
