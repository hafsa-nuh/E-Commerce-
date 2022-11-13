import styled from "styled-components";
import Card from "./Card";

const TeamStyle = styled.div`
background-color:#F0F8FF;
margin-top: 2rem;
    .wrapper{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
        gap: 2rem;
        justify-content: center;
    }
    .card{
      overflow: hidden;
      box-shadow: 0 2px 20px #ECECEC;  
      border-radius: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      transition: transform 200ms ease-in; 
      background-color: lightblue; 

      &-image{
        height: 12rem;
        width: 100%;
        object-fit: cover;
        border-radius: 5%;
      }
      &-title{
        padding: 1rem;
      }
      &-desc{
        padding: 0 1rem;
        font-size: 1.4rem;
       font-family: 'Monospace'
      } 
       &:hover{
        transform: scale(1.02); 
      }
    }
    h1{
        text-align: center;
        font-size: 3.6rem;
    }
`;

export default function Team({teamMembers}) {
    //console.log(teamMembers)
  return (
    <TeamStyle>
        <h1>Meet The Team</h1>
      <div className="wrapper" key={teamMembers.id}>
        {teamMembers.map((member)=> {
            return <Card member = {member}/>
        })}
      </div>
    </TeamStyle>
  );
}
