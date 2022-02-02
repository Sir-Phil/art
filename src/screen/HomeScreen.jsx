import React from 'react'
import Products from '../components/Product'
import { DailyProductSliding } from '../data/DailyProductSlide'
import product from '../data/Products'

const HomeScreen = ({DailyProductSliding}) => {
    return (
        <div>
            <div>
                {DailyProductSliding}
            </div>

            <div className="row justify-content-center">
                {product.map(product => {
                    return <Products product={product}/>
                })}
            </div>
        </div>
    )
}

export default HomeScreen
