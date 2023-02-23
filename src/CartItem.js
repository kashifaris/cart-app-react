import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            prices: 999,
            title: 'Mobile Phone',
            qty:1,
            img:''
        }
    }
    increaseQuantity=()=>{
        console.log("true",this.state);
        }
    render(){
        const{prices, title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                 <img style={styles.image} />
                </div>
                <div className='right-block'>
                        <div style={{fontSize:25}}>{title}</div>
                        <div style={{color:'#777'}}>price: {prices} Rs</div>
                        <div style={{color:'#777'}}>Qty: {qty}</div>
                        <div className='cart-item-action'>
                            {/*buttons*/}
                            <img
                            onClick={this.increaseQuantity} alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1828/1828926.png'/>
                            <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png'/>
                            <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png'/>


                        </div>
                </div>


            </div>
        );
    }
}

const styles={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;