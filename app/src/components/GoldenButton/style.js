import styled from 'styled-components';
import {MAIN_COLOR_DARK, SECONDARY_COLOR, DEFAULT_BORDER_RADIUS, DEFAULT_HEIGHT_BUTTONS} from '../../constants/defaultStyleProps'

const css = `
color:${MAIN_COLOR_DARK};
background-image:linear-gradient(to bottom right,#f7f7cf,#ccc64b, #abad13);
max-width:150px;
padding:5px 10px;
text-align:center;
height: ${DEFAULT_HEIGHT_BUTTONS};
margin:1%;
font-family: "PT Sans", sans-serif;
font-weight:600;
font-size:1rem;
border:solid 2px ${MAIN_COLOR_DARK};
border-radius:${DEFAULT_BORDER_RADIUS};

&:hover{
    background-image:linear-gradient(to bottom right,#efefad,#dfd84d,#9b9d1e);
}
`

export const StyledLink = Link => {
    return  styled(Link)`${css}`;
}

export const StyledBtn =  styled.button`${css}`;
