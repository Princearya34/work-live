
import { styled } from 'styled-components';
import Comment from '../../Extras/Comment';
import data from '../../Assets/data.ts'
import curve from '../../Assets/curve2.png';
const CommentPage = () => {
 const CommentBoxes = styled.div`
   
   height:150vh;
   width:99vw;
   background-color:#0A0D25;
  `;
    const CommentTitle = styled.h3`
    text-align:center;
    color:white;
    font-family: "Rowdies", serif;
    font-weight: 500;
    font-style: normal;
    font-size:50px;
  `;
const CommentTitleSpan = styled.span`
   font-family: "Mukta", serif;
   font-weight: 800;
   font-style: normal;
  `
  const Section = styled.img`
  width: 100%;
  overflow:hidden;
  background-color:#0A0D25;
  z-index:-1;
  margin:0px 0px 30px 0px;
 `;
 const SectionComment = styled.div`
   display:flex;
   justify-content:center;
   gap:10px;
   margin:10px;
 `;
 const FirstSection = styled.div`
 margin:15vh 0 0 0;
 `;
 const SecondSection = styled.div`
 `;
 const ThirdSection = styled.div`
 margin:15vh 0 0 0;
 `;
    return (
        <CommentBoxes>
             <Section src={curve} />
            <CommentTitle>
                Kuch To <CommentTitleSpan>लोग  </CommentTitleSpan>
                kahenge🤭
            </CommentTitle>
             <SectionComment>
             <FirstSection>
             <Comment 
                profilePic={data[0].profilePic}
                name={data[0].name}
                username={data[0].username}
                replyingTo={data[0].replyingTo}
                comment={data[0].comment}
                time={data[0].time}
                likes={data[0].likes}   />
                <Comment 
                profilePic={data[1].profilePic}
                name={data[1].name}
                username={data[1].username}
                replyingTo={data[1].replyingTo}
                comment={data[1].comment}
                time={data[1].time}
                likes={data[1].likes}   />
               
              
             </FirstSection>
             <SecondSection>
             <Comment 
                profilePic={data[3].profilePic}
                name={data[3].name}
                username={data[3].username}
                replyingTo={data[3].replyingTo}
                comment={data[3].comment}
                time={data[3].time}
                likes={data[3].likes}   />
                <Comment 
                profilePic={data[4].profilePic}
                name={data[4].name}
                username={data[4].username}
                replyingTo={data[4].replyingTo}
                comment={data[4].comment}
                time={data[4].time}
                likes={data[4].likes}   />
                <Comment 
                profilePic={data[5].profilePic}
                name={data[5].name}
                username={data[5].username}
                replyingTo={data[5].replyingTo}
                comment={data[5].comment}
                time={data[5].time}
                likes={data[5].likes}   />
             </SecondSection>
             <ThirdSection>
             <Comment 
                profilePic={data[6].profilePic}
                name={data[6].name}
                username={data[6].username}
                replyingTo={data[6].replyingTo}
                comment={data[6].comment}
                time={data[6].time}
                likes={data[6].likes}   />
                <Comment 
                profilePic={data[7].profilePic}
                name={data[7].name}
                username={data[7].username}
                replyingTo={data[7].replyingTo}
                comment={data[0].comment}
                time={data[7].time}
                likes={data[7].likes}   />
               
             </ThirdSection>
             </SectionComment>
        </CommentBoxes>
    )
}

export default CommentPage