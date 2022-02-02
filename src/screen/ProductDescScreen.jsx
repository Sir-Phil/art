import React from 'react';
import products from '../data/Products';
import {useParams} from 'react-router-dom';


const ProductDescScreen = () => {

    const {id} = useParams();
    const product = products.find((p) => p.id === Number(id))

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card m-2 p-2">
                        <h1>{product.name} </h1>
                        <img src={product.image} alt='detailsimg' className='img-fluid imgdetails'/>
                        <p>{product.discription} </p>
                    </div>
                </div>
                <div className="col-md-6 text-start">
                    <div className="m-2">
                        <h1>Price :{product.price} </h1>
                        <hr />   
                        <h1>Select Quantity</h1>
                        <select>
                        {[...Array(product.countInStock).keys()].map((x, i) => {
                            return <option value={i+1}>{i+1}</option>
                        })}
                        </select>
                    </div>    
                    <hr />
                    <button className="btn btn-dark">Add To Cart</button>                                       
                </div>
            </div>
        </div>
    )
}

export default ProductDescScreen
