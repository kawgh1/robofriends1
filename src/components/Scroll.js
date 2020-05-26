import React from 'react';

const Scroll = (props) => {

	return (
		<div style={{overflow: 'scroll', border: '2px solid #0ccac4', height: '500px'}}>
			{props.children}
		</div>

		);
};

export default Scroll;