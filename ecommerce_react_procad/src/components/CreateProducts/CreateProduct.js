import ProductForm from './ProductForm';

//parent component of product form
function CreateProduct(props) {
	// #30 Child to Parent Component Communication
	function onCreateProduct(product) {
		props.createProduct(product);
	}
	//the productform has a reassigned function onCreateProduct that will become a props.children property of its child productForm and the function will recieve the product object passed from the child component
	return (
		<div className='row'>
			<div
				className='col-lg-8 mx-auto '
				style={{
					backgroundColor: 'white',
					padding: '10px 20px',
					marginBottom: 20
				}}>
				<ProductForm createProduct={onCreateProduct}></ProductForm>
			</div>
		</div>
	);
}

export default CreateProduct;

//new attribute createProduct to assign the reference of the CreateProduct function
