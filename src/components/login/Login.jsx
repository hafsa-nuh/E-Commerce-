import { useState,useContext,useEffect} from "react";
import { UserContext } from "../../services/UserContext";
import {useNavigate} from "react-router-dom"
function Login(){
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [error,setError]=useState("")
  const {user,
    setUser,
    isLogin,
    setLogin,
    login,
    register,
    message,
    logout } =useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name !== "" && email !== ""){
        let username=name;
        let useremail=email;
        login(username,useremail)
        }else{
            setError("All Inputs field Required")
        }
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
            justifyContent:'center',
            margin:'auto'
        }}>
    { !isLogin ?
    <div   style={{marginTop:'100px',marginBottom:'100px'}}>
      <h1 style={{ display:'flex',justifyContent:'center',marginBottom:'20px'}}>Login</h1>
      {
        message ?
        <>
        <h2 style={{color:'red'}}>{message}</h2><button style={{background:'green',color:'white'}} onClick={()=>{navigate('/register')}}>Click Here to Register</button>
        </>
        : null
      }
      {
      error?
      <h2 style={{color:'red'}}>{error}</h2> :null
      }
      <form  onSubmit={(e)=>handleSubmit(e)}> 
        <div style={{display:'flex',fontSize:'15px',marginTop:'20px',marginBottom:'20px'}}>
            <label style={{color:'green'}}> Name:   </label>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div style={{display:'flex',fontSize:'15px',marginTop:'20px',marginBottom:'20px'}}>
            <label style={{color:'green'}}>Email:  </label>
      <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div style={{display:'flex',fontSize:'15px',marginTop:'20px',marginBottom:'20px'}}>
         
      <input  style={{display:'flex',fontSize:'15px',background:'red',color:'white',flex:'right'}} type="submit" value="Login"/>
      </div>
     </form>
     </div>
     : <h1>You are logged In as 

        <p style={{color:'green'}}>
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
export default Login