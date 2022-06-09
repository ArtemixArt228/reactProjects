import { useState } from 'react';

const SingleColor = ({ rgb, weight, hex, index }) => {
	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(',');

	return (
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(`#${hex}`);
				setTimeout(() => setAlert(false), 3000);
			}}
		>
			<p className='percent-value '>{weight}%</p>
			<p className='color-value'>{`#${hex}`}</p>
			{alert && <p className='alert'>copied to clipboard</p>}
		</article>
	);
};
export default SingleColor;
