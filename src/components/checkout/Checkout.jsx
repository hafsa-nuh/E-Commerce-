import {useContext,useState} from "react"
import { UserContext } from "../../services/UserContext";

function Checkout ({cartItems}){
    const {user,
        setUser,
        isLogin,
        setLogin,
        login,
        register,
        logout } =useContext(UserContext)
        
        console.log(`Checkout${user.email}`)
        const [name,setName]=useState("")
        const [email,setEmail]=useState("")

        const [orders,setOrders]=useState([])
        
        const [message,setMessage]=useState("")

        const order1={
            orderId:1,
            name:"Mackbook Pro Laptop",
            image_url:"https://sample.photos",
            price:100000,
            category:"Laptops",
            userId: user.id

        }
         console.log(orders)

        const handleLogin=(e)=>{
            e.preventDefault()
            login(name,email)
        }
        const handleSubmit=(e)=>{
            e.preventDefault()
            setOrders(order1)
            fetch(`http://localhost:3000/orders/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId:1,
                    userId:user.id,
                    orders:cartItems.map((product)=>{
                        return {product :product.id}
                    })
                    
                    })
            })
            .then(res=>res.json())
            .then(data=>{
                setMessage("Your order is successfull")
            }).catch(()=>{

            })
           
        }
    return (
        <div style={{
            display :'flex',
            justifyContent:'center',
            margin:'auto'
            }}>
        <div style={
            {
                display:'block',
                justifyContent:'center',
                margin:'auto'
            }}>
            <h1>Checkout/ Order</h1>
            <h2 style={{color:'green'}}>{message}</h2>
    {  !(user.name && user.email) ?
      <form onSubmit={(e)=>handleLogin(e)}> 
      <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input style={{color:'red'}}  type="submit" value="Login"/>
     </form>

     :  
     <div style={{
        display :'flex',
        justifyContent:'center',
        margin:'auto'
        }}>
    <div style={
        {
            display:'block',
            justifyContent:'center',
            margin:'auto'
        }}>
    
     <h2>Welcome <span style={{color:'green'}}>{user.name}</span>Click Checkout to make an Order</h2>
     
     <form onSubmit={(e)=>handleSubmit(e)}> 
      <input type="text" value={user.name} />
      <input type="email"  value={user.email}/>
      {cartItems.length !== 0 ?
      <input  style={{color:'red'}} type="submit" value="Checkout"/>
     :<input  disabled style={{color:'red'}} type="submit" value="Checkout"/>
      }
      </form>

     </div>
     </div>
     }
        <div>{cartItems.length === 0 && <div style={{color:'red'}}>No Items Selected!!</div>}</div>
        <ul style={{display:'block',padding:'20px',margin:'10px',listStyle:'none'}}></ul>
            {
                    cartItems.map(cart=>{
                        return(
                        <div style={{marginRight:'100px'}} key={cart.id}>
                        <li style={{fontSize:'30px'}}>{cart.name}</li>
                        <li><img src={cart.image_url}/></li>
                        <li>{cart.price}</li>
                        <li>{cart.category}</li>
                         </div>
                        );
                    })
                }
                
                    { cartItems.length > 0 ?   <button style={{backgroundColor:'red'}}>Order</button> : null}
            
        </div>
        </div>
    );
    }
    export default  Checkout;