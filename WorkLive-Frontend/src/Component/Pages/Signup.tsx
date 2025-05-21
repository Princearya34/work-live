import React, { useState } from "react";
import styled from "styled-components";
import { Link as WebLink } from "react-router-dom";
import axios from "axios";

const SignupWrapper = styled.div`
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
  height: 80vh;
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

const SelectBox = styled.select`
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  margin-left: 3px;
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

const Signup = () => {
  const [formData, setFormData] = useState({
    company_email: "",
    company_name: "",
    company_role: "",
    company_password: "",
    company_enrollmentNo: "",
    company_enrollmentDate:Date.now(),
    active_employee:[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateEnrollmentNo = (name: string) => {
    const prefix = name.slice(0, 3).toUpperCase();
    const randomNum = Math.floor(Math.random() * 10000);
    return `${prefix}${randomNum}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enrollmentNo = generateEnrollmentNo(formData.company_name);
    const dataToSubmit = { ...formData, company_enrollmentNo: enrollmentNo };
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/organization/signup", dataToSubmit);
      console.log(response.data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const roleOptions = [
    { value: "developer", label: "Developer (Tech)" },
    { value: "designer", label: "Designer (Tech)" },
    { value: "data_scientist", label: "Data Scientist (Tech)" },
    { value: "system_admin", label: "System Administrator (Tech)" },
    { value: "manager", label: "Manager (Non-Tech)" },
    { value: "hr", label: "HR (Non-Tech)" },
    { value: "sales", label: "Sales (Non-Tech)" },
    { value: "marketing", label: "Marketing (Non-Tech)" },
  ];

  return (
    <SignupWrapper>
      <FirstSection />
      <SecondSection>
        <Heading>Sign Up</Heading>
        <FormSection onSubmit={handleSubmit}>
          <FormHeading htmlFor="name">Name</FormHeading>
          <FormBox
            type="text"
            name="company_name"
            id="name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
          <FormHeading htmlFor="email">Email</FormHeading>
          <FormBox
            type="email"
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
          <FormHeading htmlFor="role">Role</FormHeading>
          <SelectBox
            name="company_role"
            id="role"
            value={formData.company_role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select your role</option>
            {roleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectBox>
          <Button type="submit">Sign Up</Button>
        </FormSection>
        <SignUpLink>
          <SignUpText>Already have an account?</SignUpText>
          <Link to="/login">Log In</Link>
        </SignUpLink>
      </SecondSection>
    </SignupWrapper>
  );
};

export default Signup;