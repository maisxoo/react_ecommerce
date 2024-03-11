import React, {useState} from 'react';
import Products from './Products';

function ProductList(props) {
	// console.log(props.newProduct);
	// let [newProductList, updateProductList] = useState(products);
	// updateProductList([props.newProduct, ...products]);
	return (
		<div className='row'>
			<div className='col-lg-8 mx-auto'>
				<ul className='list-group shadow'>
					{props.newProductList.map(product => (
						<Products
							key={product.pId}
							id={product?.pId}
							name={product?.pName}
							description={product?.desc}
							isAvailable={product?.isAvailable}
							image={product?.image}
							price={product?.price}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ProductList;
