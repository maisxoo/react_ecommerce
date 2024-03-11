import Products from './Products';
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
	}
];
function ProductList(props) {
	console.log(props.newProduct);
	return (
		<div className='row'>
			<div className='col-lg-8 mx-auto'>
				<ul className='list-group shadow'>
					<Products
						id={products[0].pId}
						name={products[0].pName}
						description={products[0].desc}
						isAvailable={products[0].isAvailable}
						image={products[0].image}
						price={products[0].price}
					/>

					<Products
						id={products[1].pId}
						name={products[1].pName}
						description={products[1].desc}
						isAvailable={products[1].isAvailable}
						image={products[1].image}
						price={products[1].price}
					/>

					<Products
						id={products[2].pId}
						name={products[2].pName}
						description={products[2].desc}
						isAvailable={products[2].isAvailable}
						image={products[2].image}
						price={products[2].price}
					/>

					<Products
						id={products[3].pId}
						name={products[3].pName}
						description={products[3].desc}
						isAvailable={products[3].isAvailable}
						image={products[3].image}
						price={products[3].price}
					/>

					<Products
						id={products[4].pId}
						name={products[4].pName}
						description={products[4].desc}
						isAvailable={products[4].isAvailable}
						image={products[4].image}
						price={products[4].price}
					/>
				</ul>
			</div>
		</div>
	);
}

export default ProductList;
