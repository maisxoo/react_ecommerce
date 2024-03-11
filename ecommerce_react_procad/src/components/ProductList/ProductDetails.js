import React, {useState} from 'react';
import Button from './Button';

//child property of Products receive price and isAvailable
//parent of Button + =

function ProductDetails(props) {
	let badgeClass = 'badge badge-margin-left-440';
	badgeClass += props.isAvailable ? ' bg-success' : ' bg-danger';

	let [productCount, updateCount] = useState(0);

	function displayFormattedProductCount() {
		return productCount > 0 ? productCount : 0;
	}

	let incremenetProductCount = function () {
		// productCount++;
		// console.log(productCount);
		updateCount(++productCount);
	};
	let decrementProductCount = function () {
		updateCount(--productCount);
	};

	return (
		<div className='d-flex align-items-center justify-content-start mt-1'>
			<h6 className='font-weight-bold my-2' style={{marginRight: 30}}>
				{props.price}
			</h6>

			<Button eventHandler={decrementProductCount}>-</Button>
			<span
				style={{
					padding: ' 0px 14px',
					fontSize: 13
				}}>
				{displayFormattedProductCount()}
			</span>
			<Button eventHandler={incremenetProductCount}>+</Button>
			<span className={badgeClass}>
				{props.isAvailable ? 'Available' : 'Unavailable'}
			</span>
		</div>
	);
}

export default ProductDetails;
