import React from 'react';
import { BestsellerContainer, BestsellerButton } from './BestsellerElements.jsx';

function Bestseller() {
	return (
		<BestsellerContainer>
			<h1>Las mas pedidas</h1>
			<p>Milanesas de soja rellenas con calabaza</p>
			<BestsellerButton>Pedir</BestsellerButton>
		</BestsellerContainer>
	);
}

export default Bestseller;