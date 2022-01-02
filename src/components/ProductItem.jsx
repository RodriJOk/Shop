import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AppContext from '../context/AppContext'

const ProductItem = ({product}) => {
	const image = product.category.image
	const price = product.price
	const title = product.title
	const description = product.description

	const {appToCard} = useContext(AppContext);

	const hanleClick = (item) => {
		addToCard(item);
	}
	return (
		<div className="ProductItem">
			<img src={image} alt={title} loading='lazy'/>
			<div className="product-info">
				<div className='title-and-price-container'>
					<p className='title'>{title}</p>
					<p>$ {price} ARS</p>
				</div>
				<div className='description'>
					<p>{description}</p>
				</div>
				<figure onClick={()=>hanleClick(product)} className='figure-container'>
					<i class="fas fa-cart-plus"></i>
					<span>Comprar</span>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
