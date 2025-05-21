import styled from 'styled-components';

interface CommentProps {
  profilePic: string;
  name: string;
  username: string;
  replyingTo?: string; 
  comment: string;
  time: string;
  likes: number;
}

const Comment: React.FC<CommentProps> = ({ 
  profilePic, 
  name, 
  username, 
  replyingTo, 
  comment, 
  time, 
  likes, 
}) => {
  const Comments = styled.div`
    height: auto;
    width: 24vw;
    border: 1px solid #444;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    background-color: #222; 
    color: #fff;
  `;

  const Logo = styled.img`
    width: 27px; 
    height: 20px; 
    margin: 0px 0px 0px 21vw;
  `;

  const FirstSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `;
  
  const ProfilePic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  `;
  
  const About = styled.div`
   
  `;
  
  const Name = styled.h2`
    margin: 0;
    font-size: 16px;
    font-family: 'Arial', sans-serif; 
  `;
  
  const UserName = styled.p`
    margin: 5px 0 0 0;
    font-size: 14px;
    color: #bbb; 
    font-family: 'Arial', sans-serif; 
  `;
  
  const FollowSpan = styled.span`
    font-size: 12px;
    color: #1da1f2;
    cursor: pointer;
  `;

  const SecondSection = styled.div`
    margin: 20px 0;
  `;
  
  const Replying = styled.p`
    
    font-size: 12px;
    color: #bbb; 
  `;
  
  const ActualComment = styled.h3`
    font-size: 19px;
    margin: 5px 0;
    font-family: 'Arial', sans-serif; 
  `;
  
  const CommentTime = styled.p`
    font-size: 12px;
    color: #bbb; 
  `;

  const ThirdSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  `;
  
  const Like = styled.div`
    display: flex;
    align-items: center;
  `;
  
  const LikeButton = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
  `;
  
  const LikeCount = styled.p`
    font-size: 12px;
    color: #bbb;
  `;
  
  const Reply = styled.div`
    display: flex;
    align-items: center;
  `;
  
  const ReplyButton = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    cursor: pointer;
  `;
  
  const Replytxt = styled.h3`
    font-size: 12px;
    color: #1da1f2;
    margin: 0;
    cursor: pointer;
  `;
  
  const FourthSection = styled.div`
    margin-top: 10px;
    font-size: 12px;
    color: #1da1f2;
    cursor: pointer;
  `;

  return (
    <Comments>
        <Logo src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=ffffff" alt="Logo" />
      <FirstSection>
        <ProfilePic src={profilePic} alt={`${name}'s profile`} />
        <About>
          <Name>{name}</Name>
          <UserName>{username}</UserName>
          {replyingTo && <Replying>Replying to {replyingTo}</Replying>}
        </About>
        
      </FirstSection>
      
      <SecondSection>
        <ActualComment>{comment}</ActualComment>
        <CommentTime>{time}</CommentTime>
      </SecondSection>
      <ThirdSection>
        <Like>
          <LikeButton src="https://img.icons8.com/?size=100&id=JD2A4WXqotI8&format=png&color=ffffff" alt="Like" />
          <LikeCount>{likes}</LikeCount>
        </Like>
        <Reply>
          <ReplyButton src="https://img.icons8.com/?size=100&id=Vdd6sgTNjPhQ&format=png&color=ffffff" alt="Reply" />
          <Replytxt>Reply</Replytxt>
        </Reply>
      </ThirdSection>
      <FourthSection>
        <FollowSpan>Follow</FollowSpan>
      </FourthSection>
    </Comments>
  );
};

export default Comment;