import styled from 'styled-components'

const Home = ({toggle}) => {
  return (
    <Container>
    <div> 
      <img 
      src = '\Images\dices.jpeg'
      />
      </div>
      <div className= 'content'>
        <h1>
            Dice Game
        </h1>
        <Button onClick = {toggle}>
            Play Now
        </Button>
      </div>
    </Container>
  )
}
export default Home

const Container = styled.div`
max-width: 1180px  ;
height: 100vh;
display:flex; 
margin : 0 auto;
align-items : center;

.content h1{
    font-size: 89px;
    white-space: nowrap;
}
`;

const Button = styled.button`
    display: flex;
    flex-direction : column-gap;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background-color: black;
    border-radius:5px;
    color: white;
    min-width:220px;
    border: none;
    cursor :pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
    `;

