import './cart.css'
// import {useState} from "react"
import {Link} from "react-router-dom"
function ShoppingCart(props){
    return (
      
      <aside style={{margin:'auto'}}>
       <h2>Cart Items</h2>
      
       <div>{props.cartItems.length === 0 && <div>Cart is Empty</div>}</div>
       <ul style={{display:'block',padding:'10px',margin:'10px',listStyle:'none'}}></ul>
       {
                   Array.isArray(props.cartItems) ? props.cartItems.map(cart=>{
                       return(
                       <div style={{marginRight:'0px'}} key={cart.id}>
                       <li style={{fontSize:'30px'}}>{cart.name}</li>
                       <li><img src={cart.image_url} alt=" "/></li>
                       <li>{cart.price}</li>
                       <li>{cart.description}</li>
                       
                       <button onClick={()=>{props.onAdd(cart)}} style={{backgroundColor:'red'}}>Add</button>
                       <button onClick={()=>{props.onRemove(cart)}} style={{backgroundColor:'red'}}>Remove</button>
                       
                       
                        </div>
                       );
                   })
                  
                   :null
               }
                <button><Link to="/checkout"> Checkout</Link></button>
               {props.cartItems.length !== 0 && (
                   <div>
                   <hr></hr>
                   <div>
                       <h2>Total Price</h2>
                       <h3>
                        
                       </h3>
                   </div>
                   </div>
               )}
      </aside>
    );
   }
   export default ShoppingCart;