import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Body = styled.div
`
    background-color: #06436B;
    padding: 24px;
    padding-bottom: 40px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 600px
`

export const StyledArrow = styled(FontAwesomeIcon)
`
    margin-right: auto
`

export const SlideContainer = styled.div
`
    display: flex;
    flex-direction: column
`

export const LogoContainer = styled.div
`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px
`

export const SlideImage = styled.img
`
    max-width: 100%;
    border-radius: 16px;
`

export const CardContainer = styled.div
`
    display: flex;
    justify-content: space-between;
`

export const Card = styled.div
`
    background-color: ${(props) => props.theme === "light" ? "#CCDCEA" : "#06436B"};
    border-radius: 8px;
    padding: 12px 12px;
    font-size: 12px;
    color: ${(props) => props.theme === "light" ? "#06436B" : "#FFFFFF"};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 20%;
    text-align: center;
`

export const CardImg = styled.img
`
    width: 24px;
    height: 24px;
    margin-bottom: 8px
`

export const Footer = styled.div
`
    background-color: #FFFFFF;
    padding: 32px 24px;
`

export const FooterText = styled.p
`
    font-size: 24px;
    color: #06436B;
    margin-bottom: 32px
`

export const PaymentMenu = styled.div
`
    background-color: #FFFFFF;
    padding: 32px 24px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    border-radius: 16px 16px 0 0;
    text-align: center;
`

export const BackgroundDarken = styled.div
`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0
`

export const CloseMenu = styled.div
`
    width: 100vw;
    height: 76vh;
`