import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/cars/carSlice';

function Section() {
    
    const data = useSelector(selectCars);
    return (
        <>
            {data &&
                data.map((data)=> (
                    <Wrap bgImage = {data.backGround}>
                    <Zoom>
                        <ItemText>
                            <h1>{data.title}</h1>
                            <p>{data.description}<a href="https://www.tesla.com/support/taking-delivery?redirect=no">{data.cursor}</a></p>
                        </ItemText>
                    </Zoom>
                    <All>
                        
                            <Buttons>
                                <Fade bottom>
                                    <LeftButton><a href="https://www.tesla.com/models/design#overview" >{data.leftBtn}</a></LeftButton>
                                </Fade>
                                
                                    {data.rightBtn &&
                                        <Fade bottom> 
                                            <RightButton><a href="https://www.tesla.com/inventory/new/ms" >{data.rightBtn}</a></RightButton>
                                        </Fade>   
                                    }
                            </Buttons>
                        
                        <DownArrow src="https://img.icons8.com/ios/30/000000/expand-arrow--v1.png" /> 
                    </All>
                </Wrap>  
                ))
            }
        </>
    )
}

export default Section

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}.jpg")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ItemText = styled.div`
    padding-top: 15vh;
    font-size: 17px;   
`
const All = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Buttons = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 60px 0 30px 0;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        
    };
    @media (max-width: 450px) {
        flex-direction: column;
        align-items: center;
        padding-left: 12px;   
    };
   
`

const LeftButton = styled.div`
    a {
        text-decoration: none;
        color: white;
    };
    background: rgba(23, 26, 32, 0.8);
    width: 256px;
    height: 40px;
    color: white;
    border-radius: 100px;
    display: flex;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    margin: 0 15px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
        width: 400px;
        margin-right: 30px;    
    };
    @media (max-width: 450px) {
        width: 250px;
        margin-right: 30px;    
    };
`

const RightButton = styled(LeftButton)`
    a {
        color: black;
    };
    background-color: white;
    opacity: 0.65;
    color: black;
    @media (max-width: 768px) {
        margin-top: 15px;
    };
   


`
const DownArrow = styled.img`
    animation: animateDown infinite 1.5s;
    padding: 10px 0 40px 0px;
    display: flex;
    justify-content: center;
`
