import { useState,useContext } from "react";
import { UserContext } from "../../services/UserContext";
function User(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const {user,
    setUser,
    isLogin,
    setLogin,
    login,
    register,
    logout } =useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        let username=name;
        let useremail=email;
        login(username,useremail)
    }
    return (

    <>
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
    { !isLogin ?
    <div>
      <h1>Login</h1>
      <form onSubmit={(e)=>handleSubmit(e)}> 
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input  style={{color:'red'}} type="submit" value="Login"/>
     </form>
     </div>
     : <h1>You are already logged In as 

        <p>
            {user.email}
        </p>
        <button style={{fontSize:'large',color:'red'}}onClick={logout}>Logout</button>
        </h1>
    }

    {
        
    }
    </div>
    </div>
     </>
    );
}
export default User