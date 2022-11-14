import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';
import Pages from "./pages/Pages";
import { UserContext } from './services/UserContext';


function App() {
  const navigate=useNavigate()
  const [user,setUser]=useState({id:null, name:'',email:''})
  const [isLogin,setLogin]=useState(false)
  const [message,setMessage]=useState("")
  const [registerMessage,setRegMessage]=useState("")

  useEffect(() => {
   const data=window.localStorage.getItem('userdata');
   if(data !== null){
   setUser(JSON.parse(data))
   }
  }, []);


  useEffect(() => {
    window.localStorage.setItem('userdata', JSON.stringify(user));
  }, [user]);


  const login =(name,email) =>{
    fetch(`http://aqueous-castle-47869.herokuapp.com/customers`)
    .then(res=>res.json())
    .then(user=>{
     let exist=user.find((x)=>x.email === email)
      if(exist)
      {
      setUser({id :exist.id,name:exist.name,email :exist.email})
      setLogin(true) 
      
    }else {
          setMessage("You are not registered!!")
         
      }
    })
  }

  const register = (username,useremail)=>{

   fetch(`http://aqueous-castle-47869.herokuapp.com/customers`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: username,email:useremail })
  })
  .then(res=>res.json())
  .then(user=> {
    setRegMessage("You have successfully registered!!")
    setUser({id :user.id,name:user.name,email :user.email})
    setLogin(true)
  }
    )

  
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
    message,
    registerMessage,
    logout
  }
  return (
    <UserContext.Provider value={values}>
    <Pages/>
    </UserContext.Provider>
  );
}

export default App;
