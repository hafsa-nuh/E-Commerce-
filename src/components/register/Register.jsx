import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(155, 155, 155, 0.2),rgba(155, 155, 155, 0.5)),url("https://tinyurl.com/2s3etx5z") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


function Register(){

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.target.reset()
    }
    return (
      <>
        <Container>
          <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
              <Input placeholder="name" />
              <Input placeholder="last name" />
              <Input placeholder="username" />
              <Input placeholder="email" />
              <Input placeholder="password" />
              <Input placeholder="confirm password" />
              <Agreement>
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              <Button>CREATE</Button>
            </Form>
          </Wrapper>
        </Container>
      </>
    );
}
export default Register;