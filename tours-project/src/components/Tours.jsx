import TourCard from './TourCard';

const Tours = ({ tours, removeTour }) => {
	return (
		<section>
			<div className='title'>
				<h2>Ours Tours</h2>
				<div className='underline'></div>
			</div>
			<div>
				{tours.map((tour) => (
					<TourCard key={tour.id} {...tour} removeTour={removeTour} />
				))}
			</div>
		</section>
	);
};

export default Tours;
