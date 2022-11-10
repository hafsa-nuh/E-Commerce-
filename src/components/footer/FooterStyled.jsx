import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-shadow: 15px 15px 17px 18px rgba(0, 0, 0, 0.1);
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
export const TextRow = styled.div`
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #dfeefc;
`;
export const TestP = styled.p`
    text-align: center;
    font-size: 1.2rem;
    
`

