import styled from "styled-components";


const FooterContainer = styled.div`
  height: 110vh;
  width: 99vw;
  background-color:#1D1C35;
  
`;

const FeatureHeading = styled.div`
  margin: 10vh 0 0 0;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: #5A46D6;
  height: 30vh;
`;

const FeatureHeadingFirst = styled.h3`
  text-align: center;
  color: #7D6CE9;
  background-color: #D3CCFD;
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  width: 18vw;
  padding: 3px 1px;
  margin: 11px 0 0 40vw;
`;

const FeatureSectionSecond = styled.h2`
  font-size: 46px;
  line-height: 52px;
  font-weight: 700;
  color: white;
  font-family: "Lexend Deca", sans-serif;
  margin-top: 4vh;
`;

const FeatureSectionThird = styled.p`
  line-height: 28px;
  font-size: 18px;
  font-family: "Lexend Deca", sans-serif;
  margin-top: 2vh;
  color: white;
  font-weight: 400;
`;



const Footer = styled.footer`
  font-family: nunito-sans, sans-serif;
  text-align: center;
`;

const MobileSocialList = styled.div`
  padding-bottom: 40px;
  width: 100%;
`;


const HR = styled.div`
  height: 0;
  padding: 0;
  margin: 0;
  display: block;
  border-bottom: 1px #cacada solid;
`;

const BottomBar = styled.div`
  max-width: 1280px;
  margin: 10vh 0vw 0 6vw;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Menu = styled.div`
  margin-bottom: 30px;
  min-width: 50%;
`;

const MenuHead = styled.div`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 900;
  line-height: 1.11;
  color: white;
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #2f6cb3;
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;
  color: white;
  margin: 0 20px;
`;

const PolicyRow = styled.p`
  margin: 0;
  padding: 0;
  padding-bottom: 20px;
`;

const menu = [
    {
        name: "About Us",
        links: [
            { title: "About WorkLive", url: "https://work-live-frontend.vercel.app/" },
            { title: "Help and Feedback", url: "https://work-live-frontend.vercel.app/" },
            { title: "Terms and Conditions", url: "https://work-live-frontend.vercel.app/" },
            { title: "Privacy Policy", url: "https://work-live-frontend.vercel.app/" },
            { title: "FAQ", url: "https://work-live-frontend.vercel.app/" }
        ]
    },
    {
        name: "Support",
        links: [
            { title: "Help Center", url: "https://work-live-frontend.vercel.app/" },
            { title: "Downloads", url: "https://work-live-frontend.vercel.app/" },
            { title: "Partners", url: "https://work-live-frontend.vercel.app/" },
            { title: "FAQs", url: "https://work-live-frontend.vercel.app/" },
            { title: "Data Retention", url: "https://work-live-frontend.vercel.app/" }
        ]
    }
];




const Fotter = () => {
    return (
        <FooterContainer>
            <FeatureHeading>
                <FeatureHeadingFirst>
                    DON’T WAIT
                </FeatureHeadingFirst>
                <FeatureSectionSecond>
                    Start Your WorkLive Journey Today!
                </FeatureSectionSecond>
                <FeatureSectionThird>
                    Get detailed and clean activity reports of your team.
                </FeatureSectionThird>
            </FeatureHeading>
            <Footer>

                <HR />
                <BottomBar>
                    {menu.map(({ name, links }) => (
                        <Menu key={name}>
                            <MenuHead>{name}</MenuHead>
                            {links.map(({ title, url }) => (
                                <MenuLink key={title} href={url}>{title}</MenuLink>
                            ))}
                        </Menu>
                    ))}
                    <MobileSocialList>
                       
                    </MobileSocialList>
                    <Policy>
                        <PolicyRow>© 2025 WorkLive, LLC. All rights reserved.</PolicyRow>
                        <PolicyRow>
                            Results may vary depending on the starting point, effort, and individual circumstances. Monitoring tools are designed to assist in tracking employee productivity and performance, but outcomes may differ across teams and individuals.
                        </PolicyRow>
                        <PolicyRow>
                            Before implementing any monitoring program, employers should consult with legal and HR professionals to ensure compliance with applicable privacy laws, employment regulations, and other legal requirements. The contents of this service are for informational purposes only and are not intended to replace professional advice, diagnosis, or treatment in any area.
                        </PolicyRow>
                        <PolicyRow>
                            WorkLive may receive compensation for certain services or features provided through third-party partnerships or referrals, but we do not earn from external affiliate links.
                        </PolicyRow>
                    </Policy>


                </BottomBar>
            </Footer>
        </FooterContainer>
    );
};

export default Fotter;