import React from 'react';

const CartItem=(props)=>{   

        const{price, title,qty}=props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                 <img alt='' style={styles.image} src={props.product.img} />
                </div>
                <div className='right-block'>
                        <div style={{fontSize:25}}>{title}</div>
                        <div style={{color:'#777'}}>price: {price} Rs</div>
                        <div style={{color:'#777'}}>Qty: {qty}</div>
                        <div className='cart-item-action'>
                            {/*buttons*/}
                            <img
                            onClick={()=>props.onIncreaseQuantity(props.product)} 
                            alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1828/1828926.png'/>
                            <img
                            onClick={()=>props.onDecreaseQuantity(props.product)} 
                            alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png'/>
                            <img 
                            onClick={()=>props.onDeleteProduct(props.product.id)} alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png'/>


                        </div>
                </div>


            </div>
        );
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