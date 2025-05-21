import styled from "styled-components";
import curve from '../../Assets/curve.png';

// Define styled components outside the functional component
const Hero = styled.div`
  padding: 10vh 0 0 0;
  background-color: #A5BFCC;
  height: 100vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const QuoteSection = styled.div`
  text-align: center;
  color: #000;
  max-width: 80%;
  margin: 0 auto;
`;

const FirstLine = styled.h2`
  font-family: "Playwrite IN", serif;
  font-weight: 900;
  font-size: 70px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  margin-bottom: 0;
`;

const SecondLine = styled.h2`
  font-family: "Rowdies", serif;
  font-weight: 400;
  font-size: 70px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 0;
`;

const SecondLineSecond = styled.h2`
  font-family: "Rowdies", serif;
  font-weight: 400;
  font-size: 70px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 0;
  color: #441752;
`;

const SecondLineDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
`;

const ThirdLine = styled.h2`
  font-family: "Exo 2", serif;
  font-weight: 600;
  font-size: 70px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  letter-spacing: 1px;
`;

const Img = styled.img`
  height: 100px;
  margin: 0 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const BackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2), transparent);
  z-index: -1;
`;

const Section = styled.img`
  padding: 20vh 0 0 0;
  width: 100%;
  overflow:hidden;
`;

const HeroSection = () => {
  return (
    <Hero>
      <QuoteSection>
        <FirstLine>Revolutionizing</FirstLine>
        <SecondLineDiv>
          <SecondLine>remote</SecondLine>
          <Img src="https://img.icons8.com/?size=100&id=o8qI8lVPZWN4&format=png&color=000000" />
          <SecondLineSecond>work with seamless</SecondLineSecond>
        </SecondLineDiv>
        <ThirdLine>employee monitoring.</ThirdLine>
      </QuoteSection>
      <BackgroundEffect />
      <Section src={curve} />
    </Hero>
  );
};

export default HeroSection;
