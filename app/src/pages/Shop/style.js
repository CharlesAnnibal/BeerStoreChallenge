import styled from 'styled-components';

export const StyledShop = styled.div`
    display:flex;
    flex-direction:column;
`

export const StyledTitle = styled.h2`
    
`

export const ProductList = styled.div`
    display:flex;
    width:100%;
    flex-direction:row;
    flex-wrap:wrap;

    @media(min-width:768px){
        width:100%;
    }
`

export const ShopContainer = styled.section`
    display:flex;
    flex-direction:column;
    margin: 60px 10% 0 5%;
    @media(min-width:768px){
        width:65%;
        display:flex;
        left: 0;
        
    }
`

export const SideCart = styled.div`
    display:none;
    position:fixed;
    box-shadow: 2px 2px 6px 0px #999;

    @media(min-width:768px){
        width:20%;
        display:flex;
        height: 80vh;
        top:60px;
        right: 0;
        margin: 1% 5%;
    }
`