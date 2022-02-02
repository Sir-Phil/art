import React from 'react'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const Products = ({product}) => {
    return (
        <div className="col-md-3 m-3 card p-2 text-start">
            <div>
                <Link to={`products/${product.id}`} className="text-decoration-none">
                    <img src={product.image} alt="ima" className="img-fluid" />
                    <h1>{product.name} </h1>
                    <Rating
                        style={{color:'orange'}}
                        initialRating={product.rating}
                        emptySymbol="fas fa-star fa-1x"
                        fullSymbol="fa fa-star fa-1x"
                        readonly={true}
                    />
                    <h1>Price : {product.price}</h1>
                </Link>               
            </div>
        </div>
    )
}

export default Products
