import './FilterProduct.css';

//child component of App.js
let FilterProduct = props => {
	function onFilterValueChange(e) {
		props.filterValueSelected(e.target.value);
	}
	return (
		<div className='filter-area'>
			<select name='isAvailable' onChange={onFilterValueChange}>
				<option value='all'>All</option>
				<option value='available'>Available</option>
				<option value='unavailable'>Unavailable</option>
			</select>
		</div>
	);
};

export default FilterProduct;
