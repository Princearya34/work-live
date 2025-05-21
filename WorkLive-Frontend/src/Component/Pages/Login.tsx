import React, { useState } from "react";
import styled from "styled-components";
import { Link as WebLink, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginWrapper = styled.div`
  background-color: #051323;
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 20px;
`;

const FirstSection = styled.div`
  width: 40vw;
  height: 90vh;
`;

const SecondSection = styled.div`
  background-color: #050e17;
  width: 30vw;
  height: 70vh;
  margin-top: 90px;
  margin-left: 10vw;
  border: 3px solid #111925;
  border-radius: 20px;
`;

const Heading = styled.div`
  color: white;
  margin-top: 40px;
  margin-left: 2vw;
  font-size: 35px;
  font-family: "Lexend Deca", sans-serif;
`;

const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  margin: 40px;
  gap: 10px;
`;

const FormHeading = styled.label`
  color: #708297;
  font-weight: 400;
  font-size: 18px;
`;

const FormBox = styled.input`
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  margin-left: 3px;
`;

const RememberMeBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const SignUpLink = styled.div`
  display: flex;
  width: 30vw;
  padding-left: 40px;
`;

const SignUpText = styled.h6`
  color: white;
  font-size: 17px;
`;

const Link = styled(WebLink)`
  text-decoration: none;
  font-size: 19px;
  margin-left: 8px;
  color: blue;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    company_email: "",
    company_password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/organization/login", formData);
      console.log(response.data);
      if (response.data.message == "Login successful") {
        navigate("/signup");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <LoginWrapper>
      <FirstSection />
      <SecondSection>
        <Heading>Sign in</Heading>
        <FormSection onSubmit={handleSubmit}>
          <FormHeading htmlFor="email">Email</FormHeading>
          <FormBox
            type="text"
            name="company_email"
            id="email"
            value={formData.company_email}
            onChange={handleChange}
            required
          />
          <FormHeading htmlFor="password">Password</FormHeading>
          <FormBox
            type="password"
            name="company_password"
            id="password"
            value={formData.company_password}
            onChange={handleChange}
            required
          />
          <RememberMeBox>
            <Checkbox type="checkbox" />
            <FormHeading>Remember me</FormHeading>
          </RememberMeBox>
          <Button type="submit">Sign in</Button>
        </FormSection>
        <SignUpLink>
          <SignUpText>Not have an Account,</SignUpText>
          <Link to="/signup">signup</Link>
        </SignUpLink>
      </SecondSection>
    </LoginWrapper>
  );
};

export default Login;