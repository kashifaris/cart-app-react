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
    handleIncreaseQuantity=(product)=>{
        //console.log("done");
        const{products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;

        //rerender
        this.setState({
            products:products
        })

    }
    handleDecreaseQuantity=(product)=>{
        //console.log("done");
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0) return;
        products[index].qty-=1;

        //rerender
        this.setState({
            products:products
        })

    }
    handelDeleteProduct=(id)=>{
        const{products}=this.state;
        const items=products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })
    }
    render(){
        const {products}=this.state;
        return (
            <div className='cart'>
                {products.map((product)=>{
                    return <CartItem 
                    product={product} key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handelDeleteProduct}
                    />

                })}
            </div>
        );
    }
  
}



export default Cart;