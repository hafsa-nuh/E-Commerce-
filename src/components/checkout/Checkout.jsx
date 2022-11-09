function Checkout ({cartItems}){
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
        <form>
            <input placeholder="Enter your name"/>
            <input placeholder="Enter your Email"/>
        </form>
        <div>{cartItems.length === 0 && <div>Order Form is Empty</div>}</div>
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