import { Link } from "react-router-dom";
import styled from 'styled-components';




const AppartName = styled.p `
    position: relative;
    bottom: 80px;
    left: 10px;
    width: 50%;
    overflow-wrap: break-word;
   
`
  const LinkAppardCard = styled(Link) `
  color: #FFFFFF; 
  text-decoration: none; 
  & visited {color: #FFFFFF}; 
  height: 300px;
  width: 300px;
  margin: 20px;
  @media  (max-width: 941px) {
    width: 80%; 
    margin: auto;
    margin-bottom: 20px;

}
  @media (max-width: 768px) {
    width: 100%; 
    margin: 10px auto;


}
  
  `


const AppartImg = styled.img `
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    filter: contrast(50%);
    `



const Card = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 30px;
   /*  background: linear-gradient(
        rgba(0, 0, 0, 0.3), 
        rgba(0, 0, 0, 0.3)
      ); */
    @media (max-width: 941px)  {
        width: 80%; 
        margin: auto;
        margin-bottom: 20px;
    
    }
    @media (max-width: 768px) {
        width: 90%; 
        margin: auto;
        margin-bottom: 20px;
    
    }
   
`



    





function AppartCard ({ id, title , cover }) {

  

    return (
    <Card key={id} className='appart-card'>
         <LinkAppardCard to={`/Logements/${id}`}>
            <AppartImg className='appart-img' src={cover} alt={{title}} />
            <AppartName>{title}</AppartName>
        </LinkAppardCard>
    </Card>
)

    
}

export default AppartCard