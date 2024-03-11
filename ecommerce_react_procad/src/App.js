import React, {useState} from 'react';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProducts/CreateProduct';

import './App.css';
const products = [
	{
		pId: 1,
		pName: 'Arla',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing ipsum dolor sit amet.',
		isAvailable: true,
		image: 'images/arla.png',
		price: 15
	},
	{
		pID: 2,
		pName: 'Fresh Milk',
		desc: 'Lorem ipsum keme keme keme 48 years mashumers pinkalou shontis ano lulu ng lulu kasi ugmas bakit.',
		isAvailable: true,
		image: 'images/fresh-milk.png',
		price: 15
	},
	{
		pID: 3,
		pName: 'Nestle Non-Fat Milk ',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
		isAvailable: true,
		image: 'images/nestle-nonfat.png',
		price: 18
	},
	{
		pID: 4,
		pName: 'Jolly Cow',
		desc: 'Lorem ipsum keme keme keme 48 years mabaho sudems shala na ang ng balaj dites lorem ipsum keme.',
		isAvailable: false,
		image: 'images/cow-head.png',
		price: 14
	},
	{
		pID: 5,
		pName: 'Bear Brand',
		desc: 'Lorem ipsum keme keme keme 48 years na tetetet bakit intonses tanders bokot neuro.',
		isAvailable: true,
		image: 'images/bear-brand.png',
		price: 16
	},
	{
		pID: 6,
		pName: 'Emborg',
		desc: 'Lorem ipsum keme keme keme 48 years na tetetet bakit intonses tanders bokot neuro.',
		isAvailable: true,
		image: 'images/emborg.png',
		price: 16
	}
];
function App() {
	let [newProductList, updateProductList] = useState(products);

	function createProduct(product) {
		updateProductList([product], ...newProductList);
	}
	return (
		<>
			<CreateProduct createProduct={createProduct} />
			<ProductList newProductList={newProductList} />
		</>
	);
}

export default App;
