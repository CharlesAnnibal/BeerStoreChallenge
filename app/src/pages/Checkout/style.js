import styled from 'styled-components';
import { MAIN_COLOR_DARK, DEFAULT_HEIGHT_BUTTONS, DEFAULT_BORDER_RADIUS } from '../../constants/defaultStyleProps'

const StyledCheckoutPage = styled.div`
    display:flex;
    flex-direction:column;
`

export const CheckoutContainer = styled.section`
    display:flex;
    flex-direction:column;
    @media(min-width:768px){
        width:70%;
        display:flex;
        left: 0;
        margin: 60px 15% 0 15%;
    }
`

export const CheckoutList = styled.ul`
    display:flex;
    flex-direction:column;
    padding:0;
`

export const CheckoutProdItem = styled.li`
    display:flex;
    flex-direction:row;
    margin:5px 0;
    justify-content:space-between;
    align-items:center;
`

export const ProductThumb = styled.img`
    height:120px;
    width:120px;
    object-fit:contain;
    box-shadow: 2px 2px 6px 0px #999;
`

export const ProductText = styled.p`
    font-size:1.5rem;
    font-weight:600;
`

const cssBtn = `
background-color:${MAIN_COLOR_DARK};
border: none;
color: #fff;
width: 200px;
padding: 8px 30px;
text-align: center;
height: ${DEFAULT_HEIGHT_BUTTONS};
margin:1%;
padding: 8px 0;
border-radius:${DEFAULT_BORDER_RADIUS};
`

export const StyledLink = Link => {
    return  styled(Link)`${cssBtn}`;
}

export const StyledBtn =  styled.button`${cssBtn}`;

export const CheckoutActions = styled.div`
    display:flex;
    justify-content:center;
`

export const SpanTotalAmount = styled.span`
    font-weight:600;
    margin:0 10px;
`

export default StyledCheckoutPage