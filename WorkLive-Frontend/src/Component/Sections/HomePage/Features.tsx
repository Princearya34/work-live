import styled from "styled-components"
import f1 from "../../Assets/myAppSpec.webp";
import f2 from "../../Assets/myAppSpec2.webp";
import f3 from "../../Assets/myAppSpec3.webp";


import { SetStateAction, useState } from "react";
const Features = () => {
    const FeatureSection = styled.div`
      height:100vh;
      width:99vw;
    `;
    const FeatureHeading = styled.div`
       display:flex;
       justify-content:center;
       text-align:center;
       flex-direction:column;
    `;

    const FeatureHeadingFirst = styled.h3`
    text-align:center;
     color:#7D6CE9;
     background-color:#D3CCFD;
    font-family: "Lexend Deca", sans-serif;
     font-optical-sizing: auto;
     font-weight: 600;
     font-style: normal;
     width:18vw;
     padding:3px 1px 3px 1px;
     margin:10px 0 0 40vw;
    `;
    const FeatureSectionSecond = styled.h2`
      font-size: 46px;
      line-height: 52px;
      font-weight: 700;
      color: #110302;
      font-family: "Lexend Deca", sans-serif;
      margin-top:2vh;
    `;
    const FeatureSectionThird = styled.p`
     line-height: 28px;
     font-size: 18px;
     font-family: "Lexend Deca", sans-serif;
     margin-top:2vh;
     color:#5e6373;
     font-weight: 400;
    `;
    const FeatureAboutSection= styled.div`
        display:flex;
        justify-content:space-around;
        flex-wrap:wrap;
        margin: 5vh 0 0 10vh;
    `;
    const FeatureAbout= styled.div`
      font-family: "Lexend Deca", sans-serif;
      font-size: 16px;
      line-height: 28px;
      font-weight: 400;
      text-align:center;
       width:25vw;
       height:10vh;
       border-radius:10px;
       display:flex;
       justify-content:center;
       align-items:center;
       background-color : #F2F2F6; margin: 10px;
       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
       cursor: pointer; 
    `;
    const FeatureImage = styled.img`
      margin: 0vh  0vw  0vw  25vw ;
      position: absolute;
      z-index:1;
     
    `;

    const [image, setImage] = useState(f1); 

    const handleFeatureClick = (newImage: SetStateAction<string>) => {
        setImage(newImage); 
    };

    return (
        <FeatureSection>
            <FeatureHeading>
                <FeatureHeadingFirst>
                    DATA-DRIVEN RESULTS
                </FeatureHeadingFirst>
                <FeatureSectionSecond>
                    Strategic Decisions with Data-Driven Insights
                </FeatureSectionSecond>
                <FeatureSectionThird>
                    Unlock valuable insights with detailed dashboards, productivity reports, and location analytics
                </FeatureSectionThird>
            </FeatureHeading>
            <FeatureAboutSection>
                <FeatureAbout onClick={() => handleFeatureClick(f1)}>
                    <img  src="https://www.workstatus.io/wp-content/themes/workstatus/version-2.0/assests/images/tb05.svg" alt="Icon" width="16" height="18" />
                    <p style={{"margin":"7px"}}>Detailed analytics for better decision making.</p>
                </FeatureAbout>
                <FeatureAbout onClick={() => handleFeatureClick(f2)}>
                <img   src="https://www.workstatus.io/wp-content/themes/workstatus/version-2.0/assests/images/tb01.svg" alt="Icon" width="16" height="18" />
                    <p style={{"margin":"7px"}}>Real-time data tracking and reporting.</p>
                </FeatureAbout>
                <FeatureAbout onClick={() => handleFeatureClick(f3)}>
                <img  src="https://www.workstatus.io/wp-content/themes/workstatus/version-2.0/assests/images/tb02.svg" alt="Icon" width="16" height="18" />
                    <p style={{"margin":"7px"}}>Customizable dashboards to fit your needs.</p>
                </FeatureAbout>
            </FeatureAboutSection>
            <br />
            
            <FeatureImage src={image} alt="Feature" style={{ width: '50vw', height: '80vh', marginTop: '20px' }} /> 
           
        </FeatureSection>
    )
}

export default Features;