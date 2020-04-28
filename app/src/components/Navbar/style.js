import styled from 'styled-components';
import {MAIN_COLOR_DARK, SECONDARY_COLOR} from '../../constants/defaultStyleProps'

export const StyledNavbar = styled.nav`
        background-color:${MAIN_COLOR_DARK};
        color:white;
        height:60px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:8px solid ${SECONDARY_COLOR};
        padding:0;
        position:fixed;
        top:0;
        width:100%;

        @media(min-width:768px){
            padding: 0 15%;
            
        }
    `

export const StylizeLink = Link => {
    return  styled(Link)`
            color:#fff;
            max-width:150px;
            padding:15px;

            border-bottom:2px solid transparent;
           
            &:hover{
                border-bottom:2px solid #dadab1;
            }

            `;
}


export const NavImg = styled.img`
    max-width:180px;
`