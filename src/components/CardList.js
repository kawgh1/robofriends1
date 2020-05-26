import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	// Error Boundary test
	// if (true) {
	// 	throw new Error('NOOOOOOOOOOO!');
	// }

	const cardArray = robots.map((user, i) => {
		// have to assign an id or a key to  to each DOM object, otherwise React loses track
		// if an object is deleted, it doesn't know which one and has reload the whole page
		return <Card key= {i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})

	return (
		<div>
			    {cardArray}
  		</div>

		);
}

export default CardList;