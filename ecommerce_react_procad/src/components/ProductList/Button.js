import React from 'react';

// child of ProductDetails - + to send the onClick from the its parent add props.eventHandler reference to the {decrementProductCount}
// and {incremenetProductCount} depende unsay gi click
function Button(props) {
	return (
		<button onClick={props.eventHandler} className='btn btn-primary'>
			{props.children}
		</button>
	);
}

export default Button;
