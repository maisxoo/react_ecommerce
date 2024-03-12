import {useState} from 'react';

import ProductForm from './ProductForm';

//parent component of product form
function CreateProduct(props) {
	//#36 Rendering Form Conditionally wether the create product form should be displayed
	let [showForm, updateShowForm] = useState(false);
	// #30 Child to Parent Component Communication
	function onCreateProduct(product) {
		props.createProduct(product);
	}
	//the productform has a reassigned function onCreateProduct that will become a props.children property of its child productForm and the function will recieve the product object passed from the child component

	function onCreateNewProduct() {
		updateShowForm(true);
	}

	function onProductSumittedOrCancel() {
		updateShowForm(false);
	}
	return (
		<div
			style={{
				backgroundColor: 'white',
				padding: '10px 20px'
			}}>
			{!showForm && (
				<button onClick={onCreateNewProduct}>Create Product</button>
			)}
			{showForm && (
				<ProductForm
					createProduct={onCreateProduct}
					onCancel={onProductSumittedOrCancel}></ProductForm>
			)}
		</div>
	);
}

export default CreateProduct;

//new attribute createProduct to assign the reference of the CreateProduct function
