import {useState} from 'react'
import './App.css';
import Pages from "./pages/Pages";
import { UserContext } from './services/UserContext';
function App() {
  const [user,setUser]=useState({id:null, name:'',email:''})
  const [isLogin,setLogin]=useState(false)
  const login =(name,email) =>{
    fetch(`http://localhost:3000/users`)
    .then(res=>res.json())
    .then(user=>{
     let exist=user.find((x)=>x.email === email)
      if(exist)
      {
      setUser({id :exist.id,name:exist.name,email :exist.email})
      setLogin(true)  
    }else {
          register(name,email)
      }
    })
  }

  const register = (username,useremail)=>{
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username,email:useremail })
  })
  .then(res=>res.json())
  .then(user=> setUser({id :user.id,name:user.name,email :user.email}))
  }

  const logout =(username,useremail)=>{
    setUser({id:null, name:'',email:''})
    setLogin(false)
  }


  const values={
    user,
    setUser,
    isLogin,
    setLogin,
    login,
    register,
    logout
  }
  return (
    <UserContext.Provider value={values}>
    <Pages/>
    </UserContext.Provider>
  );
}

export default App;
