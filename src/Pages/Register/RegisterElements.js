import styled from "styled-components";
import { mobile, tab } from "../../Responsive";

export const RegisterContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(5, 68, 161, 0.5), rgba(5, 68, 161, 0.5)),
    url("https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  

  
  ${mobile({ width: "80%" })}
  
  ${tab({ width: "75%" })}
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Input = styled.input`
  flex: 1;
  min-height: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
 
`;
export const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0544a1;
  cursor: pointer;
  color: #fff;

  
  ${mobile({width: "70%"})}
`;
