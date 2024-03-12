import React, {useState} from 'react';

//child of createProduct
function ProductForm(props) {
	//predefined function for the input onChange

	// **#25 Working with Multiple states** capture the events.target.value and use this value and display it on our page and combine it to an object. We use and import useState where this will be stored in the memory

	let [pName, updateName] = useState('');
	let [pPrice, updatePrice] = useState('');
	let [pDesc, updateDesc] = useState('');
	let [pAvailable, updateAvailability] = useState('');
	let [pImageUrl, updateImageUrl] = useState('');
	//25

	// **#26 Using a Single state** in this lesson we can also use singleState as all of this is related to form, e usually pass an initial value since multiple value we use an object to pass and group all states together
	/*let [userInput, updateUserInput] = useState({
		pName: '',
		pPrice: '',
		pDesc: '',
		pAvailable: '',
		pImageUrl: ''
	});
           */

	function nameInputHandler(e) {
		// pName = e.target.value;
		updateName(e.target.value);
		// **#27 Updating state that depends on previous value**we use spread operator but its not technically will work always as we are depended on the previous statea rule is when a state is dependent on its previous state instead of passing directly passing an object like this:
		/* function priceInputHandler(e) {

				// updateUserInput(e.target.value); or

		            updateUserInput({
				...userInput,
				pName: e.target.value
			});
		 	}*/
		//prevState is going to receive the prevState return an object using spread operator and update the property for better approach
		// updateUserInput(prevState => {
		// 	return {...prevState, pNmae: e.target.value};
		// });
	}

	function priceInputHandler(e) {
		updatePrice(e.target.value);
	}

	function descriptionInputHandler(e) {
		updateDesc(e.target.value);
	}

	function availabilityInputHandler(e) {
		updateAvailability(e.target.checked);
	}

	function imageInputHandler(e) {
		updateImageUrl(e.target.value);
	}

	//e assign ang special variable
	function createProductEventHander(e) {
		e.preventDefault(); //para dili mo reload ang page ig click sa add product
		let product = {
			pName: pName,
			desc: pDesc,
			isAvailable: Boolean(pAvailable), // react specific typecasting this
			image: pImageUrl,
			price: Number(pPrice)
		};

		updateName('');
		updatePrice('');
		updateDesc('');
		updateImageUrl('');
		updateAvailability('');

		//instead of logging the product we are callingthe CreateProduct on the createProduct attribute and it becomes a property of this object
		//createProduct is the attribute of the function onCreateProduct which will expect a product object pass as a parameter, tulay na siya from child to parent
		props.createProduct(product);
		props.onCancel();
	}

	return (
		<form className='row g-3' onSubmit={createProductEventHander}>
			<div className='col-md-6'>
				<label htmlFor='name'>Product Name</label>
				<input
					type='text'
					className='form-control'
					id='name'
					placeholder='Product Name'
					value={pName}
					onChange={nameInputHandler}
				/>
			</div>
			<div className='col-md-6'>
				<label htmlFor='price'>Product Price</label>
				<input
					type='number'
					min='0.01'
					step='0.01'
					className='form-control'
					id='price'
					placeholder='Product Price'
					value={pPrice}
					onChange={priceInputHandler}
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='description'>Product Description</label>
				<input
					type='text'
					className='form-control'
					id='description'
					placeholder='Product Description'
					value={pDesc}
					onChange={descriptionInputHandler}
				/>
			</div>

			<div className='form-check form-switch'>
				<input
					className='form-check-input'
					type='checkbox'
					role='switch'
					id='isAvailable'
					checked={pAvailable}
					onChange={availabilityInputHandler}
				/>
				<label className='form-check-label' htmlFor='isAvailable'>
					Is product available in stock?
				</label>
			</div>

			<div className='form-group'>
				<label htmlFor='select-image'>Select product image</label>
				<input
					type='file'
					className='form-control'
					id='select-image'
					value={pImageUrl}
					onChange={imageInputHandler}
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Add Product
			</button>
			<button type='button' onClick={props.onCancel}>
				Cancel
			</button>
		</form>
	);
}

export default ProductForm;
