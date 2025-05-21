import styled from "styled-components";
import Function from "../../Extras/Function";

const FunctionPage = () => {
  const FunctionDiv = styled.div`
   height:100vh;
   width:99vw;
  `;

  const FeatureHeading = styled.div`
       margin:10vh 0 0 0;
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
     margin:11px 0 0 40vw;
    `;

  const FeatureSectionSecond = styled.h2`
      font-size: 46px;
      line-height: 52px;
      font-weight: 700;
      color: #110302;
      font-family: "Lexend Deca", sans-serif;
      margin-top:4vh;
    `;

  const FeatureSectionThird = styled.p`
     line-height: 28px;
     font-size: 18px;
     font-family: "Lexend Deca", sans-serif;
     margin-top:2vh;
     color:#5e6373;
     font-weight: 400;
    `;

  const FeatureCard = styled.div`
      display:flex;
      justify-content:center;
      gap:40px;
      margin:10vh 0 0 0;
    `;


  return (
    <FunctionDiv>
      <FeatureHeading>
        <FeatureHeadingFirst>
          COMPLETE CONTROL
        </FeatureHeadingFirst>
        <FeatureSectionSecond>
          Attendance to Analytics – WorkLive Has It All!
        </FeatureSectionSecond>
        <FeatureSectionThird>
          WorkLive isn’t just software – it’s your unified platform for smarter operations.
        </FeatureSectionThird>
      </FeatureHeading>
      
      <FeatureCard>
        <Function 
          imageSrc="https://www.workstatus.io/wp-content/uploads/2025/01/ftslide-01.webp"
          title="Productivity Monitor"
          description="Track the productivity of your remote workforce with ease. WorkLive provides detailed insights into how much work your employees are completing during their shifts, helping you optimize workflows and improve efficiency."
        />
        <Function 
          imageSrc="https://www.workstatus.io/wp-content/uploads/2025/01/ftslide-03.webp"
          title="Attendance Tracking"
          description="Stay on top of attendance with automated time tracking and real-time monitoring. WorkLive ensures accurate tracking of employee attendance, making payroll and reporting a breeze."
        />
        <Function 
          imageSrc="https://www.workstatus.io/wp-content/uploads/2025/01/ftslide-04.webp"
          title="Location-Based Analysis"
          description="Get insights into your team’s location during work hours. WorkLive's GPS tracking and location-based analytics ensure you know where your employees are working from, improving remote job monitoring."
        />
        <Function 
          imageSrc="https://www.workstatus.io/wp-content/uploads/2025/01/ftslide-06.webp"
          title="Remote Job Monitoring"
          description="Ensure remote workers are engaged and accountable with WorkLive's comprehensive monitoring features. Real-time tracking of activities, screen usage, and work habits help maintain productivity."
        />
        <Function 
          imageSrc="https://www.workstatus.io/wp-content/uploads/2025/01/ftslide-07.webp"
          title="Employee Engagement"
          description="Promote employee engagement through personalized dashboards and performance tracking. WorkLive enables managers to connect with employees and provide continuous feedback to keep morale high."
        />
      </FeatureCard>

     
    </FunctionDiv>
  );
};

export default FunctionPage;
