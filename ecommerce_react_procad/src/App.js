import React, {useState} from 'react';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProducts/CreateProduct';

import './App.css';

function App() {
	let [newProduct, updateProduct] = useState(null);
	function createProduct(product) {
		console.log(product);
	}
	return (
		<>
			<CreateProduct createProduct={createProduct} />
			<ProductList newProduct={newProduct} />
		</>
	);
}

export default App;
