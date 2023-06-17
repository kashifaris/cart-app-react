import React from 'react';
import Cart from'./Cart';
import Navbar from './Navbar';
import {collection, getDocs,addDoc,deleteDoc,doc} from 'firebase/firestore/lite';
import {db} from './firebase'


class App extends React.Component {
    db=db;
  constructor(){
    super();
    
    this.state={
        products: [],
        loading :true
    }
} 
componentDidMount(){
    
    const productsCol =  collection(db,"products");
    async function getProducts(db) {
        const productSnapshot = await getDocs(productsCol);
        const productList = productSnapshot.docs.map((doc)=>{
            const data= doc.data();
            data['id']= doc.id;
            return data;
        });
        return productList;
      }
    const products= getProducts(db);

    products.then((data)=>{
        this.setState({
            products:data,
            loading:false
        })
    })
    
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
handelDeleteProduct= async(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>item.id!==id);

    const itemDoc= doc(db,'products',id);
    await deleteDoc(itemDoc);
    
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
  total+=element.price*element.qty;
 });
  return total;
}

addProduct= async () =>{
    const data={
        img:'https://i.pcmag.com/imagery/reviews/02FjjySMO01co9EOJRs418Z-11..v1600967648.jpg',
        price:100,
        qty:3,
        title:"Tab" 
    }
    const productsCol =  collection(db,"products");
    await addDoc(productsCol,data);
}

render(){

  const{products,loading}=this.state;

  return (
    <div className="App">
    <Navbar
    count={this.getCartCount()}
    />
    <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add Product</button>
    <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handelDeleteProduct}
    />
    {loading && <h1>Loading Products...</h1>}
    <div style={{padding:20,
                 fontSize:20}}>
      Total:{this.getCartTotal()}
    </div>
    </div>
  );

}
}

export default App;
