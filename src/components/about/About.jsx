import ParagraphText from "../footer/ParagraphText";
import styled from "styled-components";
import Team from "./Team";

const teamMembers = [
  {
    id: 1,
    img: " https://i.postimg.cc/vBWwpS8B/img-avatar2.png",
    name: "Jane Doe",
    desc: "C.E.O and Founder",
  },

  {
    id: 2,
    img: " https://i.postimg.cc/Dwbjj4wf/avatar1.jpg",
    name: "Jimmy Dove",
    desc: "Lead, Technologies",
  },

  {
    id: 1,
    img: " https://i.postimg.cc/fynTd9y3/img-avatar.png",
    name: "Brian Ross",
    desc: "Marketting",
  },
];

const AboutStyling = styled.div`
  padding: 10rem 0 10rem 0;
  background-color:#F0F8FF;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .leftSide {
    flex: 3;
  }
  .rightSide {
    flex: 2;
  }
  .aboutSubtitle {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }
  .aboutInfo {
    margin-bottom: 4rem;
    .paragraph {
      max-width: 100%;
    }
  }
  .aboutTitle {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .rightSide {
    img {
      border: 2px solid gray;
      border-radius: 2%;
    }
    &:hover {
      transform: scale(1.02);
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .aboutSubtitle {
      font-size: 1.8rem;
    }
    .aboutTitle {
      font-size: 2.8rem;
    }
  }
`;

export default function About() {
  return (
    <AboutStyling>
      <div className="container">
        <div className="top-section">
          <div className="leftSide">
            <p className="aboutSubtitle">Welcome to Tech Shop</p>
            <h2 className="aboutTitle">Bringing you Legit and New Devices</h2>
            <div className="aboutInfo">
              <ParagraphText className="paragraph">
                We began this business with a dream to Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Maxime quod soluta saepe
                ipsam totam ad necessitatibus veritatis veniam reiciendis
                nesciunt!
                <br /> <br />
                Our vision is Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Magni, excepturi iure? Aliquid omnis hic
                maiores.
                <br /> <br />
                We hope to accomplish this by Lorem ipsum dolor voluptates nihil
                magnam architecto excepturi ratione atque, ipsa deleniti velit
                dignissimos veniam adipisci commodi ipsum esse. Id, eveniet.
              </ParagraphText>
            </div>
          </div>
          <div className="rightSide">
            <img
              src="https://i.postimg.cc/BvJDzNWp/bose700.jpg"
              alt="about pic"
            />
          </div>
        </div>
      </div>
      <Team teamMembers={teamMembers} />
    </AboutStyling>
  );
}
