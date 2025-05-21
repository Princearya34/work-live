import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 380px;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); 
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; 
  transition: opacity 0.3s;
  padding: 20px;
  text-align: center;

  ${CardContainer}:hover & {
    opacity: 1; 
  }
`;

const Title = styled.h2`
  margin: 14px;
  font-size: 1.5rem;
  position: absolute;
  bottom: 10px; 
  left: 10px; 
  color: white;
`;

const Description = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Card: React.FC<{ imageSrc: string; title: string; description: string }> = ({ imageSrc, title, description }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={title} />
      <Title>{title}</Title>
      <Overlay>
        <Description>{description}</Description>
      </Overlay>
    </CardContainer>
  );
};

export default Card;