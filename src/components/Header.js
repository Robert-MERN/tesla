import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from 'react-redux';
import { selectMenu } from '../features/cars/carSlice';




function Header() {
    
    const [burgerStatus, setBurgerStatus] = useState(false);
    const data1 = useSelector(selectMenu);
    return (
        <div>
            
            <Container>
                <Fade>
                    <a>
                        <img src="/images/logo.svg" />
                    </a>
                    <Navigation>
                        <p className="a" ><a href="#">Model S</a></p>
                        <p className="b"><a href="#">Model 3</a></p>
                        <p className="c"><a href="#">Model X</a></p>
                        <p className="d"><a href="#">Model Y</a></p>
                        <p className="e" ><a href="#">Solar Roof</a></p>
                        <p className="f"><a href="#">Solar Panels</a></p>
                        <div className="animated fix-a"></div>
                    </Navigation>
                    <RightNav>
                    <p><a href="https://www.daraz.pk/catalog/?q=condom&_keyori=ss&from=input&spm=0.0.search.go.ccd52dbewwLnQW">Shop</a></p>
                    <p><a href="https://www.facebook.com/">Account</a></p>
                    <a><button onClick={() => setBurgerStatus(true)}>Menu</button></a>
                    </RightNav>
                </Fade>
                
                
            </Container>
            <BurgerNav show={burgerStatus}>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                    { data1.map((data) =>(
                        <li><a href="#">{ data }</a></li>   
                    ))}            
                </BurgerNav>
            <Backdrop showw={burgerStatus}>
            </Backdrop>
        </div>
    )
}

export default Header

const Container = styled.div`
    position: fixed;
    min-height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    a {
        text-decoration: none;
    };
    flex: 1;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    
`
const Navigation = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    .animated {
        border-radius: 10px;
        height: 32px;
        left: 0;
        top: -7px;
        position: absolute;
        background: rgba(0, 0, 0, 0.1);
        z-index:-1;
        opacity: 0;
        transition: all 0.5s ease 0s;   
    }
    
    .a:hover~.animated{
        left: 0;
        opacity: 1; 
        width: 97px;        
    }
    .b:hover~.animated{
        left: 97px;
        opacity: 1; 
        width: 97px;
    }
    .c:hover~.animated{
        left: 194px;
        opacity: 1;
        width: 96.5px;
    }
    .d:hover~.animated{
        left: 290px;
        opacity: 1;
        width: 95px;
        p {
            opacity: 1;
        } 
    }
    .e:hover~.animated{
        left: 385px;
        width: 130px;
        opacity: 1;
    }
    .f:hover~.animated{
        left: 505px;
        width: 150px;
        opacity: 1;
    }
    p {
        flex-wrap: nowrap;
        font-size: 16px;
        font-weight: 600;
        padding: 0 14px;
        letter-spacing: 1.2px;
        cursor: pointer;
    };
    @media (max-width: 1200px) {
        display: none;
    };
`
const RightNav = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    letter-spacing: 1px;
    p {
        flex-wrap: nowrap;
        font-size: 16px;
        font-weight: 600;
        padding: 0 14px;
        @media (max-width: 1200px) {
            display: none;
        }; 
    };
    button {
        background: none;
        border: none;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
    }      
`

const BurgerNav = styled.div`
    position: fixed;
    top: 20px;
    bottom: 0;
    right: 0;
    width: 290px;
    background-color: white;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 70px 0 0 40px;
    
    z-index: 3;
    li {
        padding: 11px 0;
        font-weight: bold;
        font-size: 15px;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.5s ease-in;
    }
    a{
        text-decoration: none;
    }
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.4s ease-in;
    animation: ${props => props.show ? 'fadeIn 0.8s' : 'fadeOut 0.4s'};

`
const CustomClose = styled(ClearIcon)`
    position: absolute;
    top: 25px;
    bottom: 0;
    right: 15px;
    cursor: pointer;
`

const Backdrop = styled.div`
    background: rgba(255, 255, 255, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    opacity: ${props => props.showw ? '1' : '0'};
    transition: opacity 300ms;
    z-index: ${props => props.showw ? '2' : '0'};;
`