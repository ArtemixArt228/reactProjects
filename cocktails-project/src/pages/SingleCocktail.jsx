import Loading from '../components/Loading';

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
	const { cocktailId } = useParams();

	const [loading, setLoading] = useState(false);
	const [cocktail, setCocktail] = useState(null);

	useEffect(() => {
		setLoading(true);
		oneCocktailInfo();
	}, [cocktailId]);

	const oneCocktailInfo = async () => {
		try {
			const response = await fetch(`${url}${cocktailId}`);
			const result = await response.json();

			const { drinks } = result;
			if (drinks) {
				const {
					strDrink: name,
					strDrinkThumb: image,
					strAlcoholic: info,
					strCategory: category,
					strGlass: glass,
					strInstructions: instructions,
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				} = drinks[0];
				const ingredients = [
					strIngredient1,
					strIngredient2,
					strIngredient3,
					strIngredient4,
					strIngredient5,
				];
				const cocktailComponents = {
					name,
					image,
					info,
					category,
					glass,
					instructions,
					ingredients,
				};
				setCocktail(cocktailComponents);
			} else {
				setCocktail(null);
			}
			setLoading(false);
		} catch (err) {
			setLoading(false);
			console.log(err);
		}
	};

	if (loading) {
		return <Loading />;
	}

	if (!cocktail) {
		return <h2 className='section-title'>no cocktail to display</h2>;
	} else {
		const { name, image, info, category, glass, instructions, ingredients } =
			cocktail;

		return (
			<section className='section cocktail-section'>
				<Link to='/' clasName='btn btn-primary'>
					Back home
				</Link>
				<h2 className='section-title'>{name}</h2>
				<div className='drink'>
					<img src={image} alt={name} />
					<div className='drink-info'>
						<p>
							<span className='drink-data'>name: </span> {name}
						</p>
						<p>
							<span className='drink-data'>category: </span> {category}
						</p>
						<p>
							<span className='drink-data'>info: </span> {info}
						</p>
						<p>
							<span className='drink-data'>glass: </span> {glass}
						</p>
						<p>
							<span className='drink-data'>instructions: </span> {instructions}
						</p>
						<p>
							<span className='drink-data'>ingredients: </span>{' '}
							{ingredients.map((ingredient, index) => {
								if (ingredient) {
									if (index === ingredients.length - 1)
										return <span key={index}>{ingredient}</span>;
									return <span key={index}>{ingredient},</span>;
								}
								return null;
							})}
						</p>
					</div>
				</div>
			</section>
		);
	}
};

export default SingleCocktail;
