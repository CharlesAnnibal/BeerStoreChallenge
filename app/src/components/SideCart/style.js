import styled from 'styled-components';
import { MAIN_COLOR_DARK, SECONDARY_COLOR, DEFAULT_HEIGHT_BUTTONS, DEFAULT_BORDER_RADIUS } from '../../constants/defaultStyleProps'
export const StyledSideCart = styled.div`
    display:none;
    position:fixed;
    box-shadow: 2px 2px 6px 0px #999;

    @media(min-width:768px){
        width:20%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height: 80vh;
        top:60px;
        right: 0;
        padding:10px;
        margin: 1% 5%;
    }
`

export const CartProdList = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding:0px;
`

export const CartProdItem = styled.li`
    display:flex;
    flex-direction:row;
    margin:5px 0;
    justify-content:space-between;
    align-items:center;
`

export const ProductThumb = styled.img`
    height:30px;
    width:30px;
    object-fit:contain;
`

export const BottomSideCart = styled.div`
    display:flex;
    flex-direction:column;
    align-itens:center;
`

export const StyledCheckoutButton = Link => {
    return  styled(Link)`
    background-color:${MAIN_COLOR_DARK};
    border:none;
    color:#fff;
    height: ${DEFAULT_HEIGHT_BUTTONS};
    margin:5px;
    padding: 8px 0;
    text-align:center;
    width:100%;
    border-radius:${DEFAULT_BORDER_RADIUS};
`;
}