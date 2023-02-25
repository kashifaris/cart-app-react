import React from 'react';
import Cart from'./Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [
            {
                prices: 91,
                title: 'Watch',
                qty:1,
                img:'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80',
                id:1
            },
            {
                prices: 999,
                title: 'Mobile Phone',
                qty:10,
                img:'https://media.istockphoto.com/id/1221693757/photo/new-budget-iphone-se-smartphone-by-apple-computers-unboxing.jpg?s=612x612&w=0&k=20&c=WvADbLSUjHP3ctkVy1titpCZTcAaMk1YASKa-BOlru0=',
                id:2
            },
            {
                prices: 10999,
                title: 'Laptop',
                qty:2,
                img:'https://media.istockphoto.com/id/1368877490/photo/open-laptop-or-notebook-screen-front-view.webp?s=2048x2048&w=is&k=20&c=8rlXsWQcrnQmH-T9CoMy-UNDro6Fc7tBDHQ2Rwr47ek=',
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

getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach(element => {
      count+=element.qty;    
  });
  return count;
}

getCartTotal=()=>{
  const{products}=this.state;
  let total=0;
 products.forEach(element=>{
  total+=element.prices*element.qty;
 });
  return total;
}

render(){
  const{products}=this.state;
  return (
    <div className="App">
    <Navbar
    count={this.getCartCount()}
    />
    <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handelDeleteProduct}
    />
    <div style={{padding:10,
                 fontSize:40}}>
      Total:{this.getCartTotal()}
    </div>
    </div>
    
  );
}
}

export default App;
