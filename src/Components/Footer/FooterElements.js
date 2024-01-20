import styled from "styled-components";
import { mobile } from "../../Responsive";

export const FooterContainer = styled.footer`
  display: flex;
  padding: 20px;



  ${mobile({flexDirection: "column", padding:"0px"})}
`;
export const Left = styled.div`
  padding: 20px;
  flex: 1;
`;

export const Logo = styled.h1``;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;

  
  ${mobile({display: "none"})}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;



  ${mobile({backgroundColor: "#eee"})}
`;

export const ContactItem = styled.div`
margin-top: 10px;
display: flex;
gap: 0.5rem;
margin-top: 20px;
`;



export const Payment = styled.img`
width: 40%;
margin-top: 20px;

`;