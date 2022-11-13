import { useState,useEffect} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.2)),url("https://tinyurl.com/3kz2rucc") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const ButtonBox = styled.div`
  width:220px;
  margin:35px auto;
  position:relative;
  box-shadow:0 0 20px 9px #ff61241f;
  border-radius:30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  padding: 10px 30px;
  background: transparent;
  border: 0;
  outline: none;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const RegLink = styled(Link)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;


const url = "https://aqueous-castle-47869.herokuapp.com/customers";

function Login(){

  const [personalDetail, setPersonalDetail] = useState([])
  const [login, setLogin] =useState({
    name:'',
    email:''
  })

  useEffect(()=>{
    fetch(url)
    .then(r=>r.json())
    .then(data=> setPersonalDetail(data))
  },[])

  const handleChange = (e)=>{
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
    .then(r=>r.json())
    .then(data =>{
        const newUser = [...personalDetail, data]
        setPersonalDetail(newUser)
    })
    e.target.reset()
  }

  return (
    <>
      <Container>
        <Wrapper>
          <ButtonBox>
            <Title>SIGN IN</Title>
          </ButtonBox>
          <Form onSubmit={handleSubmit}>
            <Input name="name" placeholder="username" onChange={handleChange} />
            <Input
              name="email"
              placeholder="password"
              onChange={handleChange}
            />
            <Button>LOGIN</Button>
            <RegLink>DO NOT YOU REMEMBER THE PASSWORD?</RegLink>
            <RegLink to="/register">CREATE A NEW ACCOUNT</RegLink>
          </Form>
        </Wrapper>
      </Container>

    </>
  );
}
export default Login