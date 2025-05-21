import {Link as WebLink} from "react-router-dom"
import styled, { keyframes } from 'styled-components';
import logo from '../../Assets/Logo.png';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;



const Navbar = styled.nav`
  background-color: #A5BFCC;
  display: flex;
  justify-content: space-between;
  animation: ${fadeIn} 1s ease-in-out;
`;

const Logo = styled.img`
  height: 10vh;
  margin: 0px 0px 10px 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 5vw;
  margin: 5vh 0px 0px 0px;
`;

const NavLink = styled.a``;

const Link = styled.a`
  font-family: sans-serif;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 600;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #6D8B9A;
    transform: scale(1.1);
  }
`;

const LoginOrSignUp = styled.div``;

const Login = styled.button`
  margin: 20px 16px 0px 0px;
  padding: 10px 25px 10px 20px;
  border-radius: 20px;
  background-color: #A5BFCC;
  border: none;
  cursor: pointer;
   font-family: "Rowdies", serif;
  font-weight: 400;
  font-size:20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #6D8B9A;
    transform: scale(1.1);
  }
`;

const SignUp = styled.button`
  margin: 20px 50px 0px 0px;
  padding: 10px 25px 10px 20px;
  border-radius: 20px;
   font-family: "Rowdies", serif;
  font-weight: 400;
  font-style: normal;
  background-color: #A5BFCC;
  border: none;
  cursor: pointer;
  
  transition: background-color 0.3s ease, transform 0.3s ease;
   font-size:20px;
  &:hover {
    background-color: #6D8B9A;
    transform: scale(1.1);
  }
`;
const Text=styled(WebLink)`
  text-decoration:none;
`;

const NavBar = () => {
  return (
    <Navbar>
      <Logo src={logo} />
      <NavLinks>
        <NavLink>
          <Link href="#solution">SOLUTION</Link>
        </NavLink>
        <NavLink>
          <Link href="#review">REVIEW</Link>
        </NavLink>
        <NavLink>
          <Link href="#aboutUs">ABOUT US</Link>
        </NavLink>
        <NavLink>
          <Link href="#contact">CONTACT</Link>
        </NavLink>
      </NavLinks>
      <LoginOrSignUp>
        <Login><Text to="/login">Login</Text></Login>
        <SignUp><Text to="/signup">SignUp</Text></SignUp>
      </LoginOrSignUp>
    </Navbar>
  );
};

export default NavBar;
