import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products: [
                {
                    prices: 91,
                    title: 'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    prices: 999,
                    title: 'Mobile Phone',
                    qty:10,
                    img:'',
                    id:2
                },
                {
                    prices: 10999,
                    title: 'Laptop',
                    qty:2,
                    img:'',
                    id:3
                }
            ]

        }
    }
    render(){
        const {products}=this.state;
        return (
            <div className='cart'>
                {products.map((product)=>{
                    return <CartItem product={product} key={product.id}/>

                })}
            </div>
        );
    }
  
}



export default Cart;