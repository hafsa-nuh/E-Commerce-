import { useContext } from "react";
import { UserContext } from "../../services/UserContext";
function User(){
  const {user,
    setUser,
    isLogin,
    setLogin,
    login,
    register,
    logout } =useContext(UserContext)

    return (
    <>
    { !isLogin ?
    <div>
      <h1>Login</h1>
      <form> 
      <input type="text" placeholder="Enter Name"/>
      <input type="email" placeholder="Enter Email"/>
      <input type="submit" value="Login"/>
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
     </>
    );
}
export default User