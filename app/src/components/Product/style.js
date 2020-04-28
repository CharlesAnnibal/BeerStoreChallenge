import styled from 'styled-components';

export const StyledProduct = styled.div`
        color:white;
        margin:2%;
        padding:1%;
        display:flex;
        align-items:center;
        flex-direction:column;
        width:46%;
        box-shadow: 2px 2px 6px 0px #999;

        @media(min-width:768px){
            width:21%;
        }
    `
export const ProductDataText = styled.p`
    color:#3d9240;
    margin:10px 0;
    font-weight:600;
`

export const ProductImage = styled.img`
    height:180px;
    width:100%;
    object-fit:cover;
`